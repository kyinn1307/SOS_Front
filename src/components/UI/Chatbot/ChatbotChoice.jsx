import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../common/StyledBtn";
import { ROUTES } from "../../../constants/routes";
import BoldText from "../common/BoldText";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #fafaf8;
  padding-top: 24px;
  width: 100%;
  align-items: center;
  bottom: 0;
  margin-top: 46px;
`;

const TextWrapper = styled.div`
  font-weight: 400;
  font-size: 17px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 56px;
`;

// chatbot page 오리지널 or custom 선택
const ChatbotChoice = () => {
  const navigate = useNavigate();

  const handleOriginBtnClick = () => {
    navigate(ROUTES.ORIGINAL_CHAT);
  };
  const handleChatBtnClick = () => {
    navigate(ROUTES.CUSTOM_CHAT);
  };
  return (
    <Container>
      <TextWrapper>
        간단한 질문을 통해 <BoldText>오늘의 감성을 담은 향</BoldText>을 만들어볼
        수도, 원하는 향만 담은 <BoldText>오리지널 향수</BoldText>를 만들 수도
        있어요. 😊
        <br />
        어떤 방법으로 나만의 향을 연주해 볼까요? 🎹🌸
      </TextWrapper>
      <ButtonContainer>
        <StyledBtn
          variant="white"
          onClick={handleOriginBtnClick}
          paddingLeft={"44.93px"}
        >
          오리지널 향수 만들기
        </StyledBtn>
        <StyledBtn
          variant="black"
          onClick={handleChatBtnClick}
          paddingLeft={"39.93px"}
        >
          센티와 나만의 향 찾기
        </StyledBtn>
      </ButtonContainer>
    </Container>
  );
};

export default ChatbotChoice;
