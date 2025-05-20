import styled from "styled-components";
import AlertIcon from "../../assets/admin/AlertIcon";
import StyledBtn from "./common/StyledBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 442px;
  height: 189px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  margin-top: 28px;
`;

const Text = styled.div`
  position: relative;

  font-size: 18px;
  line-height: 170%;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.011em;

  color: #000000;
  margin-top: 14px;
`;

const BtnContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  gap: 15px;
`;

const LogoutModal = ({ onClose }) => {
  return (
    <Container>
      <IconWrapper>
        <AlertIcon />
      </IconWrapper>
      <Text>로그아웃 하시겠습니까?</Text>
      <BtnContainer>
        <StyledBtn
          variant="white"
          isModal={true}
          onClick={onClose}
          isDeleteModal={true}
          paddingLeft={"64px"}
        >
          아니오
        </StyledBtn>
        <StyledBtn
          variant="black"
          isModal={true}
          onClick={onClose}
          isDeleteModal={true}
          paddingLeft={"78px"}
        >
          예
        </StyledBtn>
      </BtnContainer>
    </Container>
  );
};

export default LogoutModal;
