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

const RecoContent = () => {
  // 카트리지 에러 모달 표시 여부
  const [isCatridgeError, setIsCatridgeError] = useState(false);
  // 버튼 활성화 여부
  const [isBtnOn, setIsBtnOn] = useState(false);
  // 체크박스 상태
  const [isChecked, setIsChecked] = useState(false);

  // Zustand에서 데이터 가져오기
  const { recommendationData, sessionId, productionType } = useRecoStore();
  const navigate = useNavigate();

  // 버튼 클릭 시 향수 제작 요청
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
      // 로딩 화면으로 이동
      navigate(ROUTES.PRODUCE_LOADING);
    } catch (err) {
      console.log("실패", sessionId);
      console.error("향수 제작 요청 실패", err);

      const errorCode = err?.response?.data?.error?.code;
      const errorMessage = err?.response?.data?.error?.message;

      // 서버에서 지정한 에러 코드가 카트리지 문제일 경우
      if (errorCode === "CART_400_2") {
        setIsCatridgeError(true);
      } else {
        console.log("🔥 기타 에러 코드:", errorCode);
        console.log("🔥 기타 에러 메시지:", errorMessage);
      }
    }
  };

  // 카트리지 에러 모달 닫기
  const handleCloseBtnClick = () => {
    setIsCatridgeError(false);
  };

  // 체크박스 상태 변경 시 버튼 활성화 여부 설정
  useEffect(() => {
    setIsBtnOn(isChecked);
  }, [isChecked]);

  return (
    <>
      {/* 에러 모달 */}
      {isCatridgeError && (
        <>
          <ModalWrapper>
            <BlurLayer />
            <CatridgeModal onClose={handleCloseBtnClick} />
          </ModalWrapper>
        </>
      )}

      {/* 메인 콘텐츠 */}
      <ContentWrapper>
        <IntroText>
          🌟 당신을 위한 오늘의 향이 <BoldText>완성</BoldText>됐어요! 🌟
          <br />이 향이 오늘의 당신을 더욱 빛나게 해줄 거예요! 💖💫
        </IntroText>

        {/* 향 추천 카드: ORIGINAL or CUSTOM 여부에 따라 다르게 렌더링 */}
        {productionType === "ORIGINAL" ? (
          <OriginalRecoCard recipeInfo={recommendationData} />
        ) : (
          <RecoCard recipeInfo={recommendationData} />
        )}

        {/* 체크박스 영역 */}
        <BoxWrapper>
          <Checkbox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            content="투입구에 공병을 넣으셨나요?"
          />
        </BoxWrapper>

        {/* 향 연주 버튼 */}
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
