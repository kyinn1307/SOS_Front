import styled from "styled-components";
import BtnBlackArrow from "../../../../assets/btn_black_arrow";

const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 250px;
  height: 40px;
  background: #2c2c2c;
  box-shadow: 0px 0px 8.55464px rgba(255, 255, 255, 0.25);
  border-radius: 37.6404px;
  color: #fafaf8;

  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.011em;

  cursor: pointer;
`;

const RefillModalBtn = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>용액 추가 및 교체하기</span>
      <BtnBlackArrow />
    </Container>
  );
};

export default RefillModalBtn;
