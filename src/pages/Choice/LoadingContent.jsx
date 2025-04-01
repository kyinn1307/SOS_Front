import { useState } from "react";
import styled from "styled-components";
import GradientText from "../../components/UI/common/GradientText";
import LoadingCommentLayer from "../../assets/loading/LoadingCommentLayer";
import ProgressBar from "../../components/UI/Chatbot/ProgressBar";
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
  margin-top: 234px;
`;

const StyledLoadingCommentLayer = styled(LoadingCommentLayer)`
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
`;
const Text = styled.div`
  margin-top: 68px;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  z-index: 1;
`;

const IndicateText = styled.div`
  font-size: 15px;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #aaaaaa;
  z-index: 1;
  margin-top: 7px;
`;

const LoadingContent = () => {
  const [progress, setProgress] = useState(50);
  return (
    <>
      <ContentWrapper>
        <TextContainer>
          <TextWrapper>
            <Text>
              🎵 당신을 위한 향기가
              <GradientText> 아름다운 멜로디처럼</GradientText> 은은하게 퍼지고
              있어요... ✨
            </Text>
            <IndicateText>5-10초 정도 소요됩니다.</IndicateText>
          </TextWrapper>
          <StyledLoadingCommentLayer />
        </TextContainer>
        <ProgressBar progress={progress} />
      </ContentWrapper>
    </>
  );
};
export default LoadingContent;
