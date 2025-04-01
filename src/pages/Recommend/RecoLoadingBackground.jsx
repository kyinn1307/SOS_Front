import styled from "styled-components";
import recoLoadingBg from "../../assets/reco/reco_loading_layer.png";

const LoadingBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const ImgWrapper = styled.div`
  width: 1213px;
  height: 1674.64px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const RecoLoadingBackground = () => {
  return (
    <LoadingBgWrapper>
      <ImgWrapper>
        <StyledImg src={recoLoadingBg} alt="배경화면" />
      </ImgWrapper>
    </LoadingBgWrapper>
  );
};

export default RecoLoadingBackground;
