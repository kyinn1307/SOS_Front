import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import StyledBtn from "../../components/UI/common/StyledBtn";
import Checkbox from "../../components/UI/Reco/CheckBox";
import RecoCard from "../../components/UI/Reco/RecoCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import BoldText from "../../components/UI/common/BoldText";
import { useRecoStore } from "../../store/recoStore";
import axios from "axios";
import OriginalRecoCard from "../../components/UI/Reco/OriginalRecoCard"; // 새로 만들 컴포넌트

import BlurLayer from "../../components/Layout/BlurLayer";
import CatridgeModal from "../../components/UI/Reco/CatridgeModal";
import axiosInstance from "../../api/axiosInstance";

// const titles = [
//   "우울한 날",
//   "기쁜 날",
//   "결혼식 전날",
//   "상사에게 혼난 날",
//   "데이트 전날",
//   "스트레스 받는 날",
//   "여행 떠나기 전날",
//   "중요한 발표를 앞둔 날",
//   "새 출발을 앞둔 날",
//   "생각 정리가 필요한 날",
// ];

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const IntroText = styled.div`
  height: 64px;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  font-weight: 400;
  letter-spacing: -0.011em;
  color: #2c2c2c;
`;

const BoxWrapper = styled.div`
  margin-top: 18px;
`;
const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중심 정렬 추가 */
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

const RecoContent = () => {
  const [isCatridgeError, setIsCatridgeError] = useState(false);
  const [isBtnOn, setIsBtnOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { recommendationData, sessionId, productionType } = useRecoStore();
  const navigate = useNavigate();

  const handleBtnClick = async () => {
    if (!sessionId) {
      console.error("sessionId가 유효하지 않습니다:", sessionId);
      return;
    }

    try {
      const response = await axiosInstance.post("/production", {
        sessionId,
      });

      console.log("성공", response.data);
      navigate(ROUTES.PRODUCE_LOADING);
    } catch (err) {
      console.log("실패", sessionId);
      console.error("향수 제작 요청 실패", err);
    }
  };

  const handleCloseBtnClick = () => {
    setIsCatridgeError(false);
  };

  useEffect(() => {
    setIsBtnOn(isChecked);
  }, [isChecked]);

  return (
    <>
      {isCatridgeError && (
        <>
          <ModalWrapper>
            <BlurLayer />
            <CatridgeModal onClose={handleCloseBtnClick} />
          </ModalWrapper>
        </>
      )}
      <ContentWrapper>
        <IntroText>
          🌟 당신을 위한 오늘의 향이 <BoldText>완성</BoldText>됐어요! 🌟
          <br />이 향이 오늘의 당신을 더욱 빛나게 해줄 거예요! 💖💫
        </IntroText>
        {productionType === "ORIGINAL" ? (
          <OriginalRecoCard recipeInfo={recommendationData} />
        ) : (
          <RecoCard recipeInfo={recommendationData} />
        )}
        <BoxWrapper>
          <Checkbox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            content="투입구에 공병을 넣으셨나요?"
          />
        </BoxWrapper>
        <BtnWrapper onClick={handleBtnClick}>
          <StyledBtn
            variant="black"
            disabled={!isBtnOn}
            paddingLeft={"52.93px"}
          >
            오늘의 향 연주하기
          </StyledBtn>
        </BtnWrapper>
      </ContentWrapper>
    </>
  );
};

export default RecoContent;
