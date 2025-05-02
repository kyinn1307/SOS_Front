import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GradientText from "../../components/UI/common/GradientText";
import ProduceLoadingCommentLayer from "../../assets/loading/ProduceLoadingCommentLayer";
import ProgressBar from "../../components/UI/Chatbot/ProgressBar";
import Modal from "../../components/UI/common/Modal";
import StyledBtn from "../../components/UI/common/StyledBtn";
import BlurLayer from "../../components/Layout/BlurLayer";
import { ROUTES } from "../../constants/routes";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const TextContainer = styled.div`
  position: relative;
  width: 644px;
  height: 189px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 219px;
`;

const StyleProduceLoadingCommentLayer = styled(ProduceLoadingCommentLayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 150%;
  font-weight: 350;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  z-index: 1;
  font-style: normal;
  line-height: 180%;
  letter-spacing: -0.011em;
`;

const ModalWrapper = styled.div`
  margin-top: 205px;
  width: 442px;
`;

const BtnWrapper = styled.div`
  margin-top: 183px;
`;

const SemiBoldText = styled.span`
  font-weight: 600;
`;

const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

const ProduceLoadingContent = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const socketRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const deviceId = "exampleDeviceId123"; // TODO: 실제 deviceId 넘기기
    const socket = new WebSocket(WS_BASE_URL);

    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");

      const subscribeMessage = {
        action: "subscribe",
        topic: `/perfume/detail/${deviceId}`,
      };
      socket.send(JSON.stringify(subscribeMessage));
    };

    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (
        response.type === "connection_established" &&
        response.data?.progress !== undefined
      ) {
        setProgress(response.data.progress);
      }

      if (response.type === "completion") {
        setProgress(100);
        setIsDone(true);
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
  }, [navigate]);

  const handleComplete = () => {
    navigate(ROUTES.FRAGRANCE);
  };

  return (
    <ContentWrapper>
      {isDone ? (
        <>
          <BlurLayer />
          <ModalWrapper>
            <Modal isDone={isDone} />
          </ModalWrapper>
          <BtnWrapper>
            <StyledBtn variant="black" onClick={handleComplete}>
              체험 마무리하기
            </StyledBtn>
          </BtnWrapper>
        </>
      ) : (
        <>
          <TextContainer>
            {/* <TextWrapper>
              <Text>
                🌿 당신을 위한 향을{" "}
                <SemiBoldText>
                  <GradientText>연주</GradientText>
                </SemiBoldText>
                하는 중... 🌿
                <br />
                감성과 향이 조화롭게 어우러지는 순간을 기다려주세요. ✨
                <br />
                당신의 이야기가 향기로 피어나는 중입니다. 💫🌸
              </Text>
            </TextWrapper> */}
            <StyleProduceLoadingCommentLayer />
          </TextContainer>
          <ProgressBar progress={progress} />
        </>
      )}
    </ContentWrapper>
  );
};

export default ProduceLoadingContent;
