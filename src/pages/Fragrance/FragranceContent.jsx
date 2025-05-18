import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StyledBtn from "../../components/UI/common/StyledBtn";
import FragranceList from "../../components/UI/Fragrance/FragranceList";
import FragranceQrCard from "../../components/UI/Fragrance/FragranceQrCard";
import { ROUTES } from "../../constants/routes";
import { qrCardImageMap } from "../../constants/recoCardImageMap";

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

const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

const FragranceContent = () => {
  const [showQrCard, setShowQrCard] = useState(true);
  // const [fragranceInfo, setFragranceInfo] = useState(null);
  const socketRef = useRef(null);
  const navigate = useNavigate();

  const fragranceInfo = {
    imageUrl: qrCardImageMap["배롱나무"],
    name: "배롱나무",
    realName: "맑은 이슬을 머금은 배롱나무 생화 꽃 향기",
    description:
      "초여름의 장맛비 속, 우산 너머로 배롱나무 꽃잎들이 쏟아질 듯 피어 있습니다.굵은 빗방울이 꽃잎을 스치며 공기 속으로 번지는 건,\n촉촉하고 생생한 꽃 내음.빗속에서도 환하게 피어 있는 그 향은,\n유난히 푸르고 투명한 감정으로 다가옵니다.",
  };

  const handleBtnClick = () => {
    navigate(ROUTES.CHATBOT);
  };

  const handleQrScan = (deviceId) => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new WebSocket(WS_BASE_URL);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");

      const subscribeMessage = {
        action: "subscribe",
        topic: `/fragrance/detail/${deviceId}`,
      };
      socket.send(JSON.stringify(subscribeMessage));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.fragranceInfo) {
        // setFragranceInfo(data.fragranceInfo);
        setShowQrCard(true);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류 발생", error);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };
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
          <StyledBtn variant="black" paddingLeft={"52.93px"}>
            향기 여정 시작하기
          </StyledBtn>
        </BtnWrapper>
        {/* 테스트용 QR 스캔 버튼 */}
        {/* <button onClick={() => handleQrScan("exampleDeviceId123")}>
          QR 스캔 테스트
        </button> */}
        {showQrCard && fragranceInfo && (
          <QrArea>
            <FragranceQrCard
              fragranceInfo={fragranceInfo}
              onClose={() => setShowQrCard(false)}
            />
          </QrArea>
        )}
      </ContentWrapper>
    </>
  );
};
export default FragranceContent;
