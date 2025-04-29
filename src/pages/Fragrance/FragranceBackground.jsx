import styled from "styled-components";

const InfoBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  background: linear-gradient(
    180deg,
    #f6f4ee 48.5%,
    #faedc6 100%
  ); // background 속성으로 통합
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const InfoBackground = () => {
  return (
    <>
      <InfoBgWrapper></InfoBgWrapper>
    </>
  );
};

export default InfoBackground;
