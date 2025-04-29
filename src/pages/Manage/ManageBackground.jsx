import styled from "styled-components";

const BgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;
  background: linear-gradient(180deg, #f4f5f5 45.25%, #dfeaed 96.75%);

  z-index: -1;
`;

const AdminBackground = () => {
  return (
    <>
      <BgWrapper></BgWrapper>
    </>
  );
};

export default AdminBackground;
