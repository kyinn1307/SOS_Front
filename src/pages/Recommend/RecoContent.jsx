import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledBtn from "../../components/UI/common/StyledBtn";
import Checkbox from "../../components/UI/Reco/CheckBox";
import RecoCard from "../../components/UI/Reco/RecoCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const titles = [
  "우울한 날",
  "기쁜 날",
  "결혼식 전날",
  "상사에게 혼난 날",
  "데이트 전날",
  "스트레스 받는 날",
  "여행 떠나기 전날",
  "중요한 발표를 앞둔 날",
  "새 출발을 앞둔 날",
  "생각 정리가 필요한 날",
];

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const IntroText = styled.div`
  width: 367px;
  height: 64px;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const BoxWrapper = styled.div`
  margin-top: 18px;
`;
const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const RecoContent = () => {
  const [isBtnOn, setIsBtnOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(ROUTES.PRODUCE_LOADING);
  };

  useEffect(() => {
    setIsBtnOn(isChecked);
  }, [isChecked]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= titles.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ContentWrapper>
        <IntroText>
          🌟 당신을 위한 오늘의 향이 완성됐어요! 🌟
          <br />이 향이 오늘의 당신을 더욱 빛나게 해줄 거예요! 💖💫
        </IntroText>
        <RecoCard title={titles[currentIndex]} />

        <BoxWrapper>
          <Checkbox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            content="투입구에 공병을 넣으셨나요?"
          />
        </BoxWrapper>
        <BtnWrapper onClick={handleBtnClick}>
          <StyledBtn variant="black" disabled={!isBtnOn}>
            오늘의 향 연주하기
          </StyledBtn>
        </BtnWrapper>
      </ContentWrapper>
    </>
  );
};

export default RecoContent;
