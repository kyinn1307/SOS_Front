import styled from "styled-components";
import FlavorChoice from "../FlavorChoice";
import DeleteBtn from "../../../../assets/admin/DeleteBtn";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 405px;
  height: 275px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #2c2c2c;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #000000;
  width: 100px;
  text-align: right;
`;

const Input = styled.input`
  width: 257px;
  height: 39px;
  background: #fafaf8;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  font-size: 18px;
  color: #aaaaaa;
  padding: 4px 12px;
  box-sizing: border-box;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-right: 53px;
  margin-top: ${({ mt }) => mt || "10px"};
`;

const ChangeBtn = styled.button`
  position: relative;
  width: 185px;
  height: 40px;

  background: #2c2c2c;
  box-shadow: 0px 0px 8.55464px rgba(255, 255, 255, 0.25);
  border-radius: 37.6404px;

  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #fafaf8;
  cursor: pointer;
`;

const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 25px;
  cursor: pointer;
`;

const ChangeBtnWrapper = styled.div`
  margin-top: 20px;
`;

const ChangeFlavorModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <Title>향료 교체하기</Title>
        <DeleteBtnWrapper onClick={onClose}>
          <DeleteBtn />
        </DeleteBtnWrapper>
        <Row mt="16px">
          <Text>교체될 향료</Text>
          <FlavorChoice />
        </Row>
        <Row>
          <Text>교체될 향료</Text>
          <FlavorChoice />
        </Row>
        <Row>
          <Text>용량(ml)</Text>
          <Input placeholder="용량을 정확히 입력해 주세요." />
        </Row>
        <ChangeBtnWrapper>
          <ChangeBtn>교체하기 {">"}</ChangeBtn>
        </ChangeBtnWrapper>
      </Container>
    </Overlay>
  );
};

export default ChangeFlavorModal;
