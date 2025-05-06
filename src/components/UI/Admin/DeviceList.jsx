import { useQuery } from "@tanstack/react-query";
import { fetchDevices } from "../../../api/apis/device";
import styled from "styled-components";
import DeviceItem from "./DeviceItem";

const DeviceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 399px;
  display: flex;
  margin-top: 40px;
  padding: 35px 31.15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(151, 214, 221, 0.4);
  background: #fafaf8;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #2c2c2c;
`;

const Bar = styled.div`
  width: 590px;
  height: 0px;
  border: 0.5px solid #d3d3d3;
  margin-top: 13px;
  margin-bottom: 6px;
`;

const DeviceList = ({
  selectedDevice,
  onSelectDevice,
  onDeleteDevice,
  onEditDevice,
}) => {
  const mockDevices = [
    {
      id: "001",
      deviceName: "센트오브사운드 1호기",
      devicePhysicalId: "3748B5",
    },
    {
      id: "002",
      deviceName: "센트오브사운드 2호기",
      devicePhysicalId: "3748B6",
    },
    {
      id: "003",
      deviceName: "센트오브사운드 3호기",
      devicePhysicalId: "3748B7",
    },
    {
      id: "004",
      deviceName: "센트오브사운드 4호기",
      devicePhysicalId: "3748B8",
    },
  ];

  const {
    data: devicesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  const devices = !error && devicesData ? devicesData : mockDevices;

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <DeviceContainer>
      <Text>내 기기</Text>
      <Bar />
      {devices.map((device) => (
        <DeviceItem
          key={device.id}
          idx={device.id}
          name={device.deviceName}
          number={device.devicePhysicalId}
          selected={selectedDevice?.number === device.devicePhysicalId}
          onSelect={onSelectDevice}
          onEdit={() => onEditDevice(device)}
          onDelete={() => onDeleteDevice(device.deviceName)}
        />
      ))}
    </DeviceContainer>
  );
};

export default DeviceList;
