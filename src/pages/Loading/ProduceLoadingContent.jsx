import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

const CommentWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 260px;
  z-index: 1;
  margin-top: 175.5px;
`;

const ModalWrapper = styled.div`
  margin-top: 205px;
  width: 442px;
`;

const ProgressBarWrapper = styled.div`
  margin-top: 169.5px;
`;
const BtnWrapper = styled.div`
  margin-top: 183px;
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
            <StyledBtn
              variant="black"
              onClick={handleComplete}
              paddingLeft={"63.93px"}
            >
              체험 마무리하기
            </StyledBtn>
          </BtnWrapper>
        </>
      ) : (
        <>
          <CommentWrapper>
            <ProduceLoadingCommentLayer />
          </CommentWrapper>
          <ProgressBarWrapper>
            <ProgressBar progress={progress} />
          </ProgressBarWrapper>
        </>
      )}
    </ContentWrapper>
  );
};

export default ProduceLoadingContent;
