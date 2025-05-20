import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import StyledBtn from "../../components/UI/common/StyledBtn";
import Checkbox from "../../components/UI/Reco/CheckBox";
import RecoCard from "../../components/UI/Reco/RecoCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import BoldText from "../../components/UI/common/BoldText";
import { useRecoStore } from "../../store/recoStore";
import OriginalRecoCard from "../../components/UI/Reco/OriginalRecoCard";
import BlurLayer from "../../components/Layout/BlurLayer";
import CatridgeModal from "../../components/UI/Reco/CatridgeModal";
import axiosInstance from "../../api/axiosInstance";

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

const mockRecoCardInfoList = [
  {
    name: "스트레스 받는 날",
    description: "그린과 플로럴의 조합으로\n차분한 안정감을 선사합니다.",
    topNotes: ["경포대"],
    middleNotes: ["배롱나무", "은행나무"],
    baseNotes: ["태백산맥"],
  },
];

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
        {/* {productionType === "ORIGINAL" ? ( */}
        {/* <OriginalRecoCard recipeInfo={recommendationData} /> */}
        {/* ) : ( */}
        <RecoCard recipeInfo={mockRecoCardInfoList[0]} />
        {/* )} */}
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
