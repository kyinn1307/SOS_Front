import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatbotIcon from "../../assets/chatbot/ChatbotIcon";
import QuestionBox from "../../assets/chatbot/QuestionBox";
import ChatInput from "../../components/UI/Chatbot/ChatInput";
import BlurLayer from "../../components/Layout/BlurLayer";
import Modal from "../../components/UI/common/Modal";
import BoldText from "../../components/UI/common/BoldText";
import { startChatSession } from "../../api/apis/chatbot";
import { useNavigate } from "react-router-dom";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1; /* 기존 UI의 z-index */
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
  left: 100%;
  top: -18px;
  margin-left: 5px;
`;

const IntroText = styled.div`
  margin-top: 48px;
  font-size: 17px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  font-weight: 350;
  color: #2c2c2c;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 33%;
  left: 32%;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const ChatContent = () => {
  const [question, setQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const socketRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initChatSession = async () => {
      try {
        const response = await startChatSession();
        const { sessionId, initialMessage, websocketUrl } = response.data;

        setQuestion(initialMessage);

        const socket = new WebSocket(websocketUrl);
        socketRef.current = socket;

        socket.onopen = () => {
          console.log("WebSocket 연결 성공");
        };

        socket.onmessage = (event) => {
          const response = JSON.parse(event.data);

          if (response.type === "message" && response.data?.content) {
            setIsTyping(false);
            setQuestion(response.data.content);

            if (response.data.conversationStatus?.complete) {
              navigate("/loading");
            }
          } else if (
            response.type === "status" &&
            response.data?.status === "typing"
          ) {
            setIsTyping(true);
          } else if (response.type === "error") {
            console.error("서버 에러:", response.data.message);
            setIsError(true);
          }
        };

        socket.onerror = (error) => {
          console.error("WebSocket 오류 발생", error);
          setIsError(true);
        };

        socket.onclose = () => {
          console.log("WebSocket 연결 종료");
        };
      } catch (error) {
        console.error("채팅 세션 생성 실패", error);
        setIsError(true);
      }
    };

    initChatSession();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [navigate]);

  const sendAnswer = (answer) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const payload = {
        type: "message",
        data: {
          content: answer,
          timestamp: new Date().toISOString(),
        },
      };
      socketRef.current.send(JSON.stringify(payload));
    } else {
      console.error("WebSocket이 연결되어 있지 않습니다.");
      setIsError(true);
    }
  };

  return (
    <>
      <ContentWrapper>
        {/* {isError && (
          <>
            <ModalWrapper>
              <BlurLayer />
              <Modal isDone={!isError} />
            </ModalWrapper>
          </>
        )} */}
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
          <QuestionWrapper>
            <QuestionBox>{question || "잠시만 기다려주세요..."}</QuestionBox>
          </QuestionWrapper>
        </ChatbotField>
        <ChatInput onSend={sendAnswer} />
      </ContentWrapper>
    </>
  );
};

export default ChatContent;
