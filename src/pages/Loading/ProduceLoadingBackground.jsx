import styled from "styled-components";
import ProduceLoadingBg from "../../assets/loading/produce_loading_layer.png";

const LoadingBgWrapper = styled.div`
  position: fixed;
  width: 100%;

  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProduceLoadingBackground = () => {
  return (
    <LoadingBgWrapper>
      <StyledImg src={ProduceLoadingBg} alt="배경화면" />
    </LoadingBgWrapper>
  );
};

export default ProduceLoadingBackground;
