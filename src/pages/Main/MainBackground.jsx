import styled from "styled-components";
import SosBgTop from "../../assets/main/sos_bg_top";
import SosBgBottom from "../../assets/main/sos_bg_bottom";

const MainBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;
  background-color: #fafaf8;
  z-index: -1;
`;

const WrapperBottom = styled.div`
  position: absolute;
  z-index: 0;
  top: 400px;
  left: 640px;
`;

const WrapperTop = styled.div`
  position: absolute;
  top: -28px;
  right: 999px;
  z-index: 0;
`;
const MainBackground = () => {
  return (
    <>
      <MainBgWrapper>
        <WrapperTop>
          <SosBgTop />
        </WrapperTop>
        <WrapperBottom>
          <SosBgBottom />
        </WrapperBottom>
      </MainBgWrapper>
    </>
  );
};

export default MainBackground;
