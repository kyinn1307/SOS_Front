import styled from "styled-components";

const Container = styled.button`
  position: relative;
  display: flex;
  width: 85px;
  height: 28px;
  background: ${({ isAlert }) => (isAlert ? "#f16161" : "#2c2c2c")};
  border-radius: 20.1543px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  box-shadow: ${({ isAlert }) =>
    isAlert ? "0px 0px 8px rgba(255, 0, 0, 0.5);" : "none"};
  cursor: pointer;
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${({ isAlert }) => (isAlert ? "#FAFAF8" : "#FAFAF8")};
`;

const RefillBtn = ({ isAlert, onClick }) => {
  return (
    <Container isAlert={isAlert} onClick={onClick}>
      <Text isAlert={isAlert}>추가</Text>
    </Container>
  );
};

export default RefillBtn;
