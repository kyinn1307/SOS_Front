import styled from "styled-components";
import { useState } from "react";
import StyledBtn from "../common/StyledBtn";
import ModalDeleteBtn from "../../../assets/modal_delete_btn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 389px;
  height: 226px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #2c2c2c;
`;

const Text = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 170%;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.011em;
  color: #000000;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 257px;
  height: 39px;

  padding: 0 12px;
  background: #fafaf8;
  border: 1px solid #d3d3d3;
  border-radius: 3px;

  font-size: 18px;
  line-height: 170%;
  letter-spacing: -0.011em;
  color: #2c2c2c;

  &::placeholder {
    font-size: 18px;
    line-height: 170%;
    font-weight: 400;
    letter-spacing: -0.011em;
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: #d3d3d3; /* 포커스 시에도 기존 border 유지 */
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: ${({ mt }) => mt || "10px"};
`;

const BtnWrapper = styled.div`
  position: relative;
  margin-top: 18px;
`;

const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 25px;
`;

// 기기 수정 모달
const DeviceEditModal = ({ onClose, device }) => {
  // 기기명, 기기번호 관리
  const [deviceName, setDeviceName] = useState(device?.name || "");
  const [deviceNumber, setDeviceNumber] = useState(device?.number || "");
  // 버튼 활성화 조건
  const isValid = deviceName.trim() !== "" && deviceNumber.trim() !== "";

  return (
    <Container>
      <Row mt="20px">
        <Title>기기 수정하기</Title>
        <DeleteBtnWrapper onClick={onClose}>
          <ModalDeleteBtn />
        </DeleteBtnWrapper>
      </Row>

      <Row mt="16px">
        <Text>기기 이름</Text>
        <Input
          placeholder="기기 이름을 기입해 주세요."
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
      </Row>
      <Row>
        <Text>기기 번호</Text>
        <Input
          placeholder="기기 번호를 기입해 주세요."
          value={deviceNumber}
          onChange={(e) => setDeviceNumber(e.target.value)}
        />
      </Row>

      <BtnWrapper onClick={onClose}>
        <StyledBtn
          variant="black"
          isModal={true}
          isChangeModal={true}
          disabled={!isValid}
          paddingLeft={"53.83px"}
        >
          수정하기
        </StyledBtn>
      </BtnWrapper>
    </Container>
  );
};

export default DeviceEditModal;
