import styled from "styled-components";
import SosLetterLogo from "../../assets/main/sos_letter_logo";
import StyledBtn from "../../components/UI/common/StyledBtn";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-top: 92px;
`;

const IntroText = styled.div`
  margin-top: 61.05px;
  font-size: 20px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const GradientText = styled.div`
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
  margin-top: 27px;
`;
const MainContent = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(ROUTES.FRAGRANCE);
  };
  return (
    <ContentWrapper>
      <LogoWrapper>
        <SosLetterLogo />
      </LogoWrapper>
      <IntroText>
        안녕하세요! 😊
        <br />
        시향부터 향수 제작까지, 향과 함께하는 순간을
        <br />
        센트오브사운드와 시작해보세요! :{")"}
      </IntroText>
      <GradientText>오늘도 힘차게! 수고하시는 당신을 응원합니다!</GradientText>
      <BtnWrapper onClick={handleBtnClick}>
        <StyledBtn variant="black">향기 여정 시작하기</StyledBtn>
      </BtnWrapper>
    </ContentWrapper>
  );
};

export default MainContent;
