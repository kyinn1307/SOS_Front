import styled from "styled-components";

const Container = styled.button`
  position: relative;
  width: 250px;
  height: 40px;
  background: #2c2c2c;
  box-shadow: 0px 0px 8.55464px rgba(255, 255, 255, 0.25);
  border-radius: 37.6404px;
  color: #fafaf8;

  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.011em;

  cursor: pointer;
`;

const RefillModalBtn = ({ onClick }) => {
  return <Container onClick={onClick}>용액 추가 및 교체하기 {">"}</Container>;
};

export default RefillModalBtn;
