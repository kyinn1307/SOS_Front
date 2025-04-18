import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import CardList from "../../components/UI/Info/FragranceList";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const IntroText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 170%;
  /* or 29px */
  text-align: center;
  letter-spacing: -0.011em;
`;

const GradientText = styled.span`
  margin-top: 61px;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;

  background: linear-gradient(90deg, #7ed1dd 0%, #f1b1d6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const BtnWrapper = styled.div`
  margin-top: 25px;
`;
const FragranceContent = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/chatbot");
  };
  return (
    <>
      <ContentWrapper>
        <IntroText>
          향기는 감성에 따라
          <GradientText> 다양한 계열 </GradientText>로 나뉘어요.
          <br />
          지금부터 각 향기 그룹의 느낌을 하나씩 소개할게요. :{")"}
        </IntroText>
        <CardList />
        <BtnWrapper onClick={handleBtnClick}>
          <StyledBtn variant="black">향기 여정 시작하기</StyledBtn>
        </BtnWrapper>
      </ContentWrapper>
    </>
  );
};
export default FragranceContent;
