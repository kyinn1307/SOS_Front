import styled from "styled-components";

// 모달창 배경 설정
const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: #2c2c2c;
  opacity: 0.3;
  z-index: -1;
`;

const BlurLayer = () => {
  return <Layer />;
};

export default BlurLayer;
