import styled from "styled-components";

const Container = styled.button`
  position: relative;
  display: flex;
  width: 85px;
  height: 28px;

  background: ${({ neverFilled, isAlert }) => {
    if (neverFilled) return "#2C2C2C";
    if (isAlert) return "#F16161";
    return "#FFFFFF";
  }};

  border-radius: 20.1543px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: ${({ neverFilled, isAlert }) => {
    if (neverFilled || isAlert) return "none";
    return "1px solid #2C2C2C";
  }};
  box-shadow: ${({ isAlert }) =>
    isAlert ? "0px 0px 8px rgba(255, 0, 0, 0.5)" : "none"};
  cursor: pointer;
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${({ neverFilled, isAlert }) => {
    if (neverFilled || isAlert) return "#FAFAF8";
    return "#2C2C2C";
  }};
`;

const RefillBtn = ({ neverFilled, isAlert, onClick }) => {
  return (
    <Container neverFilled={neverFilled} isAlert={isAlert} onClick={onClick}>
      <Text neverFilled={neverFilled} isAlert={isAlert}>
        {neverFilled ? "추가" : "향료 추가"}
      </Text>
    </Container>
  );
};

export default RefillBtn;
