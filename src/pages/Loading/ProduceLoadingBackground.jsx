import styled from "styled-components";
import ProduceLoadingBg from "../../assets/loading/produce_loading_layer.png";

const LoadingBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0; /* ✅ 데스크톱과 모바일 기본값 */

  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @media (min-width: 768px) and (max-width: 1200px) {
    top: -75px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProduceLoadingBackground = () => {
  return (
    <LoadingBgWrapper>
      <StyledImg src={ProduceLoadingBg} alt="배경화면" />
    </LoadingBgWrapper>
  );
};

export default ProduceLoadingBackground;
