import styled from "styled-components";

const Container = styled.div`
  width: 768px;
  height: 7px;
  background: #fafaf8;
  margin-top: 191px;
  border-radius: 10px;
`;

const Filler = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #2c2c2c;
  transition: width 0.3s ease-in-out;
  border-radius: 10px;
`;

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Filler progress={progress} />
    </Container>
  );
};

export default ProgressBar;
