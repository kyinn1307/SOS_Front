import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../common/StyledBtn";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #fafaf8;
  padding-top: 24px;
  width: 100%;
  align-items: center;
  bottom: 0;
`;

const TextWrapper = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 56px;
`;

const ChatbotChoice = () => {
  const navigate = useNavigate();

  const handleOriginBtnClick = () => {
    navigate("/original");
  };
  const handleChatBtnClick = () => {
    navigate("/chat");
  };
  return (
    <Container>
      <TextWrapper>
        간단한 질문을 통해 오늘의 감성을 담은 향을 만들어볼 수도, 원하는 향만
        담은 오리지널 향수를 만들 수도 있어요. 😊
        <br />
        어떤 방법으로 나만의 향을 연주해 볼까요? 🎹🌸
      </TextWrapper>
      <ButtonContainer>
        <StyledBtn variant="white" onClick={handleOriginBtnClick}>
          오리지널 향수 만들기 {">"}
        </StyledBtn>
        <StyledBtn variant="black" onClick={handleChatBtnClick}>
          센티와 나만의 향 찾기 {">"}
        </StyledBtn>
      </ButtonContainer>
    </Container>
  );
};

export default ChatbotChoice;
