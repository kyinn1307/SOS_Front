import styled from "styled-components";
import { useState, useRef, use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import FragranceList from "../../components/UI/Fragrance/FragranceList";
import FragranceQrCard from "../../components/UI/Fragrance/FragranceQrCard";
import { ROUTES } from "../../constants/routes";
import { useDeviceStore } from "../../store/deviceStore";
import { mockFragranceInfoList } from "../../constants/mockFragranceInfoList";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
  color: #2c2c2c;
`;

const IntroText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
`;

const GradientText = styled.span`
  margin-top: 61px;
  font-weight: 700;
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
  background-color: rgba(0, 0, 0, 0.3);
`;

const NextBtn = styled.button`
  position: absolute;

  left: 1000px;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2c2c2c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const WS_BASE_URL = import.meta.env.VITE_WEBSOCKET_URL;

const FragranceContent = () => {
  const [showQrCard, setShowQrCard] = useState(false);
  const [isTestCard, setIsTestCard] = useState(true);
  const [fragranceInfo, setFragranceInfo] = useState(null);
  const socketRef = useRef(null);
  const navigate = useNavigate();
  const deviceId = useDeviceStore((state) => state.deviceId);
  const fragranceNames = Object.keys(mockFragranceInfoList);
  const [index, setIndex] = useState(0);

  const currentFragrance = mockFragranceInfoList[fragranceNames[index]];

  const handleNext = () => {
    if (index < fragranceNames.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      alert("마지막 향기입니다!");
    }
  };
  useEffect(() => {
    const socketUrl = `${WS_BASE_URL}/device/ws?deviceId=${deviceId}`;
    const socket = new WebSocket(socketUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("수신된 데이터:", data);

        if (data.fragranceInfo) {
          console.log("향기 정보 수신됨");
          setFragranceInfo(data.fragranceInfo);
          setShowQrCard(true);
        }
      } catch (err) {
        console.error("메시지 파싱 오류:", err);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류 발생", error);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        console.log("WebSocket 정리 완료");
      }
    };
  }, [deviceId]);

  const handleBtnClick = () => {
    navigate(ROUTES.CHATBOT);
  };

  return (
    <ContentWrapper>
      <IntroText>
        향기는 감성에 따라
        <GradientText> 다양한 계열 </GradientText>로 나뉘어요.
        <br />
        지금부터 향기 정보를 기다리고 있어요. :{")"}
      </IntroText>

      <FragranceList />

      <BtnWrapper onClick={handleBtnClick}>
        <StyledBtn variant="black" paddingLeft={"52.93px"}>
          향기 여정 시작하기
        </StyledBtn>
      </BtnWrapper>

      {showQrCard && fragranceInfo && (
        <QrArea>
          <FragranceQrCard
            fragranceInfo={fragranceInfo}
            onClose={() => setShowQrCard(false)}
          />
        </QrArea>
      )}

      {isTestCard && (
        <QrArea>
          <FragranceQrCard
            fragranceInfo={currentFragrance}
            onClose={() => setIsTestCard(false)}
          />
          <NextBtn onClick={handleNext}>다음 향기 보기</NextBtn>
        </QrArea>
      )}
    </ContentWrapper>
  );
};

export default FragranceContent;
