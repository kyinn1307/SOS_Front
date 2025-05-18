import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import StyledBtn from "../../components/UI/common/StyledBtn";
import Checkbox from "../../components/UI/Reco/CheckBox";
import RecoCard from "../../components/UI/Reco/RecoCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import BoldText from "../../components/UI/common/BoldText";

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

const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

const RecoContent = () => {
  const [isBtnOn, setIsBtnOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // 삭제 예정
  const socketRef = useRef(null);
  const navigate = useNavigate();

  const mockRecipeInfo = {
    imageUrl: ["우울한 날"],
    name: "우울한 날",
    description:
      "허브와 민트, 시트러스의 상쾌함이 중심이 되고, 우아한 로즈 향이 기분을 환기시켜줍니다.",
    topNotes: ["경포대"],
    middleNotes: ["은행나무,벚꽃"],
    baseNotes: ["밤장미"],
  };

  const handleBtnClick = () => {
    navigate(ROUTES.PRODUCE_LOADING);
  };

  useEffect(() => {
    setIsBtnOn(isChecked);
  }, [isChecked]);

  useEffect(() => {
    const deviceId = "exampleDeviceId123";

    const socket = new WebSocket(WS_BASE_URL);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");

      // 연결 후 구독 요청
      const subscribeMessage = {
        action: "subscribe",
        topic: `/recipe/detail/${deviceId}`,
      };
      socket.send(JSON.stringify(subscribeMessage));
    };

    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.recipeInfo) {
        setRecipeInfo(response.recipeInfo);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류 발생:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <>
      <ContentWrapper>
        <IntroText>
          🌟 당신을 위한 오늘의 향이 <BoldText>완성</BoldText>됐어요! 🌟
          <br />이 향이 오늘의 당신을 더욱 빛나게 해줄 거예요! 💖💫
        </IntroText>
        <RecoCard recipeInfo={recipeInfo || mockRecipeInfo} />
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
