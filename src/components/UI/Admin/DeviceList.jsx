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
  padding: 14px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(151, 214, 221, 0.4);
  background: #fafaf8;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  font-weight: 500;
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

// admin 페이지 기기 리스트 컴포넌트 (서버 api 연동)
const DeviceList = ({
  selectedDevice,
  onSelectDevice,
  onDeleteDevice,
  onEditDevice,
}) => {
  // 기기 정보 api 관리
  const {
    data: devicesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  // 데이터 로딩 처리
  if (isLoading) return <div>로딩 중...</div>;

  return (
    <DeviceContainer>
      <Text>내 기기</Text>
      <Bar />
      {/* 기기 데이터를 통한 기기 리스트 컴포넌트 렌더링 */}
      {devicesData.map((device, index) => {
        return (
          <DeviceItem
            key={device.deviceId}
            index={index}
            deviceId={device.deviceId}
            deviceName={device.deviceName}
            devicePhysicalId={device.devicePhysicalId}
            selected={selectedDevice?.deviceId === device.deviceId}
            onSelect={onSelectDevice}
            onEdit={() => onEditDevice(device)}
            onDelete={onDeleteDevice}
          />
        );
      })}
    </DeviceContainer>
  );
};

export default DeviceList;
