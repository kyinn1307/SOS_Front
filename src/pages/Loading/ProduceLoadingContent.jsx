import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProduceLoadingCommentLayer from "../../assets/loading/ProduceLoadingCommentLayer";
import ProgressBar from "../../components/UI/Chatbot/ProgressBar";
import Modal from "../../components/UI/common/Modal";
import StyledBtn from "../../components/UI/common/StyledBtn";
import BlurLayer from "../../components/Layout/BlurLayer";
import { ROUTES } from "../../constants/routes";
import { useRecoStore } from "../../store/recoStore";

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
  margin-top: 195px;
  width: 442px;
  height: 197px;
`;

const ProgressBarWrapper = styled.div`
  margin-top: 169.5px;
`;
const BtnWrapper = styled.div`
  margin-top: 173px;
`;

const WS_BASE_URL = import.meta.env.VITE_WEBSOCKET_URL;

const ProduceLoadingContent = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const socketRef = useRef(null);
  const navigate = useNavigate();
  const { sessionId } = useRecoStore();
  const intervalRef = useRef(null);

  useEffect(() => {
    const socketUrl = `${WS_BASE_URL}/session/ws?sessionId=${sessionId}`;
    const socket = new WebSocket(socketUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const { productionId, status, timestamp } = data;

        if (status === "COMPLETED") {
          // 기존 진행 중단
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }

          // 남은 퍼센트를 1.5초 동안 나눠서 증가시키기
          const current = progress;
          const target = 100;
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          const increment = (target - current) / steps;

          let currentProgress = current;

          const smoothInterval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
              setProgress(100);
              clearInterval(smoothInterval);
              setTimeout(() => setIsDone(true), 500); // 0.5초 뒤 완료 처리
            } else {
              setProgress(currentProgress);
            }
          }, stepTime);
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
  }, [sessionId]);

  useEffect(() => {
    const duration = 30000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

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
