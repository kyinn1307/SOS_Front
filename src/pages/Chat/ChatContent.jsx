import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatbotIcon from "../../assets/chatbot/ChatbotIcon";
import QuestionBox from "../../assets/chatbot/QuestionBox";
import ChatInput from "../../components/UI/Chatbot/ChatInput";
import BlurLayer from "../../components/Layout/BlurLayer";
import Modal from "../../components/UI/common/Modal";
import BoldText from "../../components/UI/common/BoldText";

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

const WS_URL = "ws://localhost:8080/ws/chat";

const ChatContent = () => {
  const [isError, setIsError] = useState(false);
  const [question, setQuestion] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(WS_URL);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.question) {
        setQuestion(data.question);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 에러 발생", error);
      setIsError(true);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendAnswer = (answer) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ answer }));
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
          {/* 질문 말풍선 */}
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
