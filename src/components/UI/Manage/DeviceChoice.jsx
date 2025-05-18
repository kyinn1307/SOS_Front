import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledBtn from "../common/StyledBtn";
import { useQuery } from "@tanstack/react-query";
import { fetchDevices } from "../../../api/apis/device";

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

const DeviceChoice = ({ deviceName, onClose }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const navigate = useNavigate();

  const {
    data: devicesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  if (isLoading) return <div>로딩 중...</div>;

  const handleSelect = (deviceName) => {
    setSelectedDevice((prev) => (prev === deviceName ? null : deviceName));
  };

  const handleChange = () => {
    const device = devicesData.find((d) => d.deviceName === selectedDevice);
    if (device) {
      navigate(`/manage/${device.deviceId}`);
      onClose();
    } else {
      alert("기기를 선택해 주세요!");
    }
  };

  return (
    <Container>
      <Title>현재 선택된 기기 : 센트오브사운드 {deviceName}</Title>
      <DeviceList>
        {devicesData.map((device, index) => (
          <DeviceInfo
            key={index}
            selected={selectedDevice === device.deviceName}
            onClick={() => handleSelect(device.deviceName)}
          >
            센트오브사운드 {device.deviceName} - {device.devicePhysicalId}
          </DeviceInfo>
        ))}
      </DeviceList>
      <BtnWrapper>
        <StyledBtn
          variant="black"
          isModal={true}
          onClick={handleChange}
          paddingLeft={"55.83px"}
        >
          변경하기
        </StyledBtn>
      </BtnWrapper>
    </Container>
  );
};

export default DeviceChoice;
