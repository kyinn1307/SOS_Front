import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import FragranceList from "../../components/UI/Fragrance/FragranceList";
import FragranceQrCard from "../../components/UI/Fragrance/FragranceQrCard";

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

const QrArea = styled.div`
  position: fixed; /* 오버레이처럼 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100; /* Content 위에 */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.3);
`;

const FragranceContent = () => {
  const [showQrCard, setShowQrCard] = useState(false);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/chatbot");
  };

  const handleQr = () => {
    setShowQrCard(true);
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
        <FragranceList />
        <BtnWrapper onClick={handleBtnClick}>
          <StyledBtn variant="black">향기 여정 시작하기</StyledBtn>
        </BtnWrapper>
        {/* qr 카드 확인용 버튼 */}
        <button onClick={handleQr}></button>
        {showQrCard && (
          <QrArea>
            <FragranceQrCard onClose={() => setShowQrCard(false)} />
          </QrArea>
        )}
      </ContentWrapper>
    </>
  );
};
export default FragranceContent;
