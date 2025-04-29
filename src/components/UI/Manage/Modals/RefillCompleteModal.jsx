import styled from "styled-components";

import ChangeIcon from "../../../../assets/manage/ChangeIcon";
import DeleteBtn from "../../../../assets/admin/DeleteBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 365px;
  height: 131px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: ${({ mt }) => mt || "14px"};
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 331px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #000000;
`;

const RefillCompleteModal = ({
  catridgeName,
  beforeAmount,
  afterAmount,
  onClose,
}) => {
  return (
    <Container>
      <BtnWrapper onClick={onClose}>
        <DeleteBtn />
      </BtnWrapper>
      <Row mt="28px">
        <Text>{beforeAmount}(ml)</Text>
        <ChangeIcon />
        <Text>{afterAmount}(ml)</Text>
      </Row>
      <Row>
        <Text>
          {catridgeName} 향료의 용액이 충전되었습니다 :{")"}
        </Text>
      </Row>
    </Container>
  );
};

export default RefillCompleteModal;
