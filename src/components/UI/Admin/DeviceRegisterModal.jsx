import styled from "styled-components";
import { useState } from "react";
import DeleteBtn from "../../../assets/admin/DeleteBtn";
import DeviceSettingBtn from "./DeviceSettingBtn";
import StyledBtn from "../common/StyledBtn";

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
  gap: 18px;
  margin-top: ${({ mt }) => mt || "10px"};
`;

const BtnWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 25px;
`;

const DeviceRegisterModal = ({ onClose }) => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceNumber, setDeviceNumber] = useState("");

  const isValid = deviceName.trim() !== "" && deviceNumber.trim() !== "";

  return (
    <Container>
      <Row mt="20px">
        <Title>기기 추가하기</Title>
        <DeleteBtnWrapper onClick={onClose}>
          <DeleteBtn />
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

      <BtnWrapper>
        <StyledBtn variant="black" isModal={true} disabled={!isValid}>
          추가하기
        </StyledBtn>
      </BtnWrapper>
    </Container>
  );
};

export default DeviceRegisterModal;
