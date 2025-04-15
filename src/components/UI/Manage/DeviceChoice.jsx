import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import StyledBtn from "../common/StyledBtn";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 399px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 30px;
  width: 504px;
  height: 59px;
  border-bottom: 1px solid #d3d3d3;

  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const DeviceList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 276px;
`;

const DeviceInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 554px;
  height: 43px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#ECF3F2" : "#fafaf8")};

  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const BtnWrapper = styled.div`
  position: relative;
`;

const DeviceChoice = ({ onClose }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const deviceOptions = [
    { name: "센트오브사운드 1호기", number: "3748B5" },
    { name: "센트오브사운드 2호기", number: "3748B6" },
    { name: "센트오브사운드 3호기", number: "3748B7" },
    { name: "센트오브사운드 4호기", number: "3748B8" },
  ];
  const handleSelect = (deviceName) => {
    setSelectedDevice((prev) => (prev === deviceName ? null : deviceName));
  };
  return (
    <Container>
      <Title>
        현재 선택된 기기 : {selectedDevice || "센트오브사운드 1호기"}
      </Title>
      <DeviceList>
        {deviceOptions.map((device, index) => (
          <DeviceInfo
            key={index}
            selected={selectedDevice === device.name}
            onClick={() => handleSelect(device.name)}
          >
            {device.name} - {device.number}
          </DeviceInfo>
        ))}
      </DeviceList>
      <BtnWrapper>
        <StyledBtn variant="black" isModal={true} onClick={onClose}>
          변경하기
        </StyledBtn>
      </BtnWrapper>
    </Container>
  );
};

export default DeviceChoice;
