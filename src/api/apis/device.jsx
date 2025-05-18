import { getData, deleteData } from "../apiClient";

export const fetchDevices = async () => {
  const response = await getData("/devices");
  console.log("📦 fetchDevices 응답:", response.data); // 여기 추가

  const deviceList = response.data.data;
  console.log("fetchDevices 응답:", deviceList); // ✅ 콘솔 확인

  return deviceList.map((item) => ({
    deviceId: item.deviceId,
    deviceName: item.deviceName,
    devicePhysicalId: item.devicePhysicalId,
  }));
};

export const deleteDevice = (deviceId) => deleteData(`/devices/${deviceId}`);
