import styled from "styled-components";
import ChangeIcon from "../../../../assets/manage/ChangeIcon";
import DeleteBtn from "../../../../assets/admin/DeleteBtn";
import AlertIcon from "../../../../assets/admin/AlertIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 337px;
  height: 131px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const IconWrapper = styled.div`
  margin-top: 28px;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #000000;
  margin-top: 14px;
`;

const FillCompleteModal = ({ flavorName, onClose }) => {
  return (
    <Container>
      <BtnWrapper onClick={onClose}>
        <DeleteBtn />
      </BtnWrapper>
      <IconWrapper>
        <AlertIcon />
      </IconWrapper>
      <Text>
        {flavorName} 향료가 추가되었습니다 :{")"}
      </Text>
    </Container>
  );
};

export default FillCompleteModal;
