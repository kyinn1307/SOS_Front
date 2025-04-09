import styled from "styled-components";

const Container = styled.button`
  position: relative;
  display: flex;
  width: 85px;
  height: 28px;
  background: ${({ neverFilled, isAlert }) =>
    neverFilled ? "#ffffff" : isAlert ? "#f16161" : "#2c2c2c"};
  border-radius: 20.1543px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: ${({ neverFilled }) => (neverFilled ? "1px solid #2C2C2C" : "none")};
  box-shadow: ${({ isAlert }) =>
    isAlert ? "0px 0px 8px rgba(255, 0, 0, 0.5);" : "none"};
  cursor: pointer;
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${({ neverFilled }) => (neverFilled ? "#2C2C2C" : "#FAFAF8")};
`;

const RefillBtn = ({ neverFilled, isAlert, onClick }) => {
  return (
    <Container neverFilled={neverFilled} isAlert={isAlert} onClick={onClick}>
      <Text neverFilled={neverFilled} isAlert={isAlert}>
        추가
      </Text>
    </Container>
  );
};

export default RefillBtn;
