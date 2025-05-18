import chatbotIcon from "./chatbot_icon.svg";
import styled from "styled-components";
import IconBigLayer from "./IconBigLayer";
import IconShadow from "./IconShadow";
import IconBigShadow from "./IconBigShadow";
import IconLayer from "./IconLayer";

const IconWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const IconLayerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const IconShadowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StyledIcon = styled.img`
  position: relative;
  z-index: 5;
  width: ${({ size }) => (size === "small" ? "212px" : "262px")};
  height: ${({ size }) => (size === "small" ? "212px" : "262px")};
`;

const ChatbotIcon = ({ size = "big" }) => {
  return (
    <IconWrapper>
      <IconLayerWrapper>
        {size === "small" ? <IconLayer /> : <IconBigLayer />}
      </IconLayerWrapper>
      <IconShadowWrapper>
        {size === "small" ? <IconShadow /> : <IconBigShadow />}
      </IconShadowWrapper>
      <StyledIcon src={chatbotIcon} alt="Chatbot Icon" size={size} />
    </IconWrapper>
  );
};

export default ChatbotIcon;
