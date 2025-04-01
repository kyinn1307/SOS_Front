import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GradientText from "../../components/UI/common/GradientText";
import LoadingCommentLayer from "../../assets/loading/LoadingCommentLayer";
import ProgressBar from "../../components/UI/Chatbot/ProgressBar";
import Modal from "../../components/UI/common/Modal";
import { StyledBtn } from "../../components/UI/common/StyledBtn";
import BlurLayer from "../../components/Layout/BlurLayer";
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
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #2c2c2c;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  margin-top: 205px;
  width: 442px;
`;

const BtnWrapper = styled.div`
  margin-top: 183px;
`;

const RecoLoadingContent = () => {
  const [progress, setProgress] = useState(50);
  const [isDone, setIsDone] = useState(true);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
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
              체험 마무리하기 {">"}
            </StyledBtn>
          </BtnWrapper>
        </>
      ) : (
        <>
          <TextContainer>
            <TextWrapper>
              <Text>
                🌿 당신을 위한 향을 <GradientText>연주</GradientText>하는 중...
                🌿
                <br />
                감성과 향이 조화롭게 어우러지는 순간을 기다려주세요. ✨
                <br />
                당신의 이야기가 향기로 피어나는 중입니다. 💫🌸
              </Text>
            </TextWrapper>
            <StyledLoadingCommentLayer />
          </TextContainer>
          <ProgressBar progress={progress} />
        </>
      )}
    </ContentWrapper>
  );
};

export default RecoLoadingContent;
