import styled from "styled-components";
import loadingBg from "../../assets/loading/loading_layer.png";

const LoadingBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0; /* ✅ 데스크톱과 모바일 기본값 */

  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  background-color: #edf6f8;

  @media (min-width: 768px) and (max-width: 1200px) {
    top: -65px;
  }
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

const LoadingBackground = () => {
  return (
    <LoadingBgWrapper>
      <ImgWrapper>
        <StyledImg src={loadingBg} alt="배경화면" />
      </ImgWrapper>
    </LoadingBgWrapper>
  );
};

export default LoadingBackground;
