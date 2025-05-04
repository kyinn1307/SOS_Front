import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GradientText from "../../components/UI/common/GradientText";
import LoadingCommentLayer from "../../assets/loading/LoadingCommentLayer";
import ProgressBar from "../../components/UI/Chatbot/ProgressBar";
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
  width: 644px;
  height: 230px;
  margin-top: 187px;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LoadingContent = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000;
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

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        navigate(ROUTES.RECOMMEND);
      }, 1000);

      return () => clearTimeout(timeout); // cleanup
    }
  }, [progress, navigate]);

  return (
    <>
      <ContentWrapper>
        <CommentWrapper>
          <LoadingCommentLayer />
        </CommentWrapper>
        <ProgressBar progress={progress} />
      </ContentWrapper>
    </>
  );
};
export default LoadingContent;
