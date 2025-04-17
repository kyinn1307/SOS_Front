import { getData, deleteData } from "../apiClient";

export const fetchDevices = async () => {
  const response = await getData("/devices");
  const deviceList = response.data.data;

  return deviceList.map((item) => ({
    id: item.deviceId,
    deviceName: item.deviceName,
    devicePhysicalId: item.devicePhysicalId,
  }));
};

export const deleteDevice = (deviceId) => deleteData(`/devices/${deviceId}`);
