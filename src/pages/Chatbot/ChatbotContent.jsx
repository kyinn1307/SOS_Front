import styled from "styled-components";
import ChatbotChoice from "../../components/UI/Chatbot/ChatbotChoice";
import ChatbotIcon from "../../assets/chatbot/ChatbotIcon";
import CommentBox from "../../assets/chatbot/CommentBox";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const ChatbotContent = () => {
  return (
    <>
      <ContentWrapper>
        <CommentBox>
          안녕하세요! 저는 당신의 감성을 향기로 연주해주는
          <br />
          맞춤형 조향 도우미, 센티예요. 🌿✨
        </CommentBox>
        <ChatbotIcon size="small" />
        <ChatbotChoice />
      </ContentWrapper>
    </>
  );
};
export default ChatbotContent;
