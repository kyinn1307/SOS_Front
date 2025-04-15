import { getData, deleteData } from "./apiClient";

export const fetchDevices = () => getData("/devices");

export const deleteDevice = (deviceId) => deleteData(`/devices/${deviceId}`);
