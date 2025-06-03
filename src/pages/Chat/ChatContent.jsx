import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceStore } from "../../store/deviceStore";
import { useRecoStore } from "../../store/recoStore";
import styled from "styled-components";
import ChatbotIcon from "../../assets/chatbot/ChatbotIcon";
import QuestionBox from "../../assets/chatbot/QuestionBox";
import ChatInput from "../../components/UI/Chatbot/ChatInput";
import BlurLayer from "../../components/Layout/BlurLayer";
import Modal from "../../components/UI/common/Modal";
import BoldText from "../../components/UI/common/BoldText";
import { startChatSession } from "../../api/apis/chatbot";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const ChatbotField = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 54px;
`;

const ChatbotWrapper = styled.div`
  position: relative;
  margin-top: 9px;
`;

const QuestionWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 100%;

  margin-left: 42px;
`;

const IntroText = styled.div`
  margin-top: 33px;
  font-size: 17px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  font-weight: 400;
  color: #2c2c2c;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 챗봇 채팅 페이지
const ChatContent = () => {
  // 채팅 input 값 상태 관리
  const [question, setQuestion] = useState("");
  const [isError, setIsError] = useState(false);
  // 채팅 세션 아이디 상태 관리
  const [sessionId, setSessionId] = useState("");
  // 채팅 세션 전역 상태 관리
  const {
    setSessionId: setRecoSessionId,
    setRecommendationData,
    setProductionType,
  } = useRecoStore();
  // 최초 채팅 웹소켓 객체 관리 (첫번째 질문용)
  const socketRef = useRef(null);
  // 이후 추가 질문을 위한 웹소켓 객체 관리
  const chatSocketRef = useRef(null);
  // 기기 아이디 전역 관리
  const { deviceId } = useDeviceStore();
  // original or custom 값 관리
  const location = useLocation();
  const navigate = useNavigate();

  // 웹소켓 기본 주소
  const WS_BASE_URL = import.meta.env.VITE_API_BASE_WS;

  useEffect(() => {
    const initChat = async () => {
      try {
        const productionType = location.pathname.includes("original")
          ? "ORIGINAL"
          : "CUSTOM";

        setProductionType(productionType);

        const sessionRes = await startChatSession({
          deviceId: deviceId || "DEVICE1",
          type: productionType,
        });

        const newSessionId = sessionRes.data.data.sessionId;
        setRecoSessionId(newSessionId);
        setSessionId(newSessionId);

        // 첫 메시지 수신 WebSocket
        const wsUrl = `${WS_BASE_URL}/api/session/ws?sessionId=${newSessionId}`;
        const socket = new WebSocket(wsUrl);
        socketRef.current = socket;

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log("🟦 InitSocket Message:", data);

          if (data.messageType === "BOT" && data.message) {
            setQuestion(data.message);
          }

          // 이후 메시지 송수신용 WebSocket 연결
          const chatSocket = new WebSocket(
            `${WS_BASE_URL}/api/session/chat/ws`
          );

          chatSocketRef.current = chatSocket;

          // 채팅 메시지 보냈을 경우
          chatSocket.onmessage = (event) => {
            try {
              const res = JSON.parse(event.data);

              if (res.status === "error") {
                const code = res.details?.code;
                const message = res.details?.message;

                console.error("서버 응답 오류:", message);
                // 에러 처리
                switch (code) {
                  case "CHAT_429_1":
                    alert("메시지 전송 가능 횟수를 초과하였습니다");
                    break;
                  case "CHAT_400_1":
                    setIsError(true);
                    break;
                  case "CHAT_400_2":
                    alert("메시지 전송에 실패했습니다");
                    break;
                  default:
                    alert(message || "알 수 없는 오류가 발생했습니다");
                }

                return;
              }
              // 향수 추천이 완료 되었을 경우
              if (res.isRecommended === true) {
                setRecommendationData(res.recommendationData);
                navigate("/loading");
              }
              // 서버의 응답 메세지가 왔을 경우
              if (res.messageType === "BOT" && res.message) {
                setQuestion(res.message);
              }
            } catch (err) {
              console.error("메시지 파싱 오류", err);
              setIsError(true);
            }
          };
          // 2번째 채팅에 대한 소켓 에러 발생 or 채팅 종료 시
          chatSocket.onerror = () => setIsError(true);
          chatSocket.onclose = () => console.log("Chat WebSocket 종료");
        };
        // 최초 채팅에 대한 소켓 에러 발생 or 채팅 종료 시
        socket.onerror = () => setIsError(true);
        socket.onclose = () => console.log("Init WebSocket 종료");
      } catch (err) {
        console.error("채팅 초기화 실패:", err);
        setIsError(true);
      }
    };

    initChat();

    return () => {
      socketRef.current?.close();
      chatSocketRef.current?.close();
    };
  }, [deviceId, location, navigate, setRecoSessionId, setRecommendationData]);

  // 채팅 input 웹소켓을 통한 전송
  const sendAnswer = (answer) => {
    if (
      chatSocketRef.current &&
      chatSocketRef.current.readyState === WebSocket.OPEN
    ) {
      setQuestion("잠시만 기다려주세요...");

      const payload = {
        sessionId,
        message: answer,
        messageType: "USER",
        timestamp: new Date().toISOString(),
        fragranceType: location.pathname.includes("original")
          ? "ORIGINAL"
          : "CUSTOM",
      };

      chatSocketRef.current.send(JSON.stringify(payload));
    } else {
      console.error("WebSocket 연결이 되어 있지 않음");
      setIsError(true);
    }
  };

  return (
    <>
      {/* 에러 발생 모달 */}
      {isError && (
        <>
          <ModalWrapper>
            <BlurLayer />
            <Modal isDone={!isError} onClose={() => setIsError(false)} />
          </ModalWrapper>
        </>
      )}
      <ContentWrapper>
        <IntroText>
          저, 센티와 함께 당신만을 위한 향을 찾아보고 싶군요!
          <br />
          그러려면 먼저 당신의 감정을 깊이 이해하고, 오늘의 기분과 분위기를
          세심하게 들여다봐야 해요. :{")"}
          <br />
          <BoldText>오늘의 이야기</BoldText>를 들려주시면, 그 감성을 담아
          어울리는 향을 연주해드릴게요. 💫🎵
        </IntroText>

        <ChatbotField>
          <ChatbotWrapper>
            <ChatbotIcon size="small" />
          </ChatbotWrapper>
          {/* 서버에서 받은 챗봇 질문 렌더링 */}
          <QuestionWrapper>
            <QuestionBox>{question || "잠시만 기다려주세요..."}</QuestionBox>
          </QuestionWrapper>
        </ChatbotField>
        {/* 챗봇 질문 입력창 */}
        <ChatInput onSend={sendAnswer} />
      </ContentWrapper>
    </>
  );
};

export default ChatContent;
