import styled from "styled-components";
import FlavorChoice from "../FlavorChoice";
import DeleteBtn from "../../../../assets/admin/DeleteBtn";
import StyledBtn from "../../common/StyledBtn";

const Overlay = styled.div`
  top: 0;
  left: 0;
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

const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 25px;
  cursor: pointer;
`;

const ChangeBtnWrapper = styled.div`
  margin-top: 20px;
`;

const ChangeFlavorModal = ({ onClose, onChangeComplete }) => {
  const handleChangeComplete = () => {
    onChangeComplete();
  };

  return (
    <Overlay>
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
        <ChangeBtnWrapper onClick={handleChangeComplete}>
          <StyledBtn
            variant="black"
            isModal={true}
            isChangeModal={true}
            paddingLeft={"53.83px"}
          >
            교체하기
          </StyledBtn>
        </ChangeBtnWrapper>
      </Container>
    </Overlay>
  );
};

export default ChangeFlavorModal;
