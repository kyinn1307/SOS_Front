import chatbotIcon from "./chatbot_icon.svg";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: ${({ size }) => (size === "small" ? "224px" : "262px")};
  height: ${({ size }) => (size === "small" ? "224px" : "262px")};
`;

const ChatbotIcon = ({ size = "big" }) => {
  return <StyledIcon src={chatbotIcon} alt="Chatbot Icon" size={size} />;
};

export default ChatbotIcon;
