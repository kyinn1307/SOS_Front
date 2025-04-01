import styled from "styled-components";
import ChatbotIcon from "../../assets/chatbot/ChatbotIcon";
import QuestionBox from "../../assets/chatbot/QuestionBox";
import ChatInput from "../../components/UI/Chatbot/ChatInput";

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
  margin-top: 73px;
`;

const ChatbotWrapper = styled.div`
  position: relative;
  margin-top: 9px;
`;
const QuestionWrapper = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 12px;
`;
const IntroText = styled.div`
  margin-top: 48px;
  font-size: 17px;
  line-height: 180%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #2c2c2c;
`;

const ChatContent = () => {
  return (
    <>
      <ContentWrapper>
        <IntroText>
          저, 센티와 함께 당신만을 위한 향을 찾아보고 싶군요!
          <br />
          그러려면 먼저 당신의 감정을 깊이 이해하고, 오늘의 기분과 분위기를
          세심하게 들여다봐야 해요. :{")"}
          <br />
          오늘의 이야기를 들려주시면, 그 감성을 담아 어울리는 향을
          연주해드릴게요. 💫🎵
        </IntroText>
        <ChatbotField>
          <ChatbotWrapper>
            <ChatbotIcon size="small" />
          </ChatbotWrapper>
          <QuestionWrapper>
            <QuestionBox>오늘 기분이 어떻게 변했으면 좋겠나요?</QuestionBox>
          </QuestionWrapper>
        </ChatbotField>
        <ChatInput />
      </ContentWrapper>
    </>
  );
};
export default ChatContent;
