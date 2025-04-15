import { getData, patchData } from "./apiClient";

export const getCartridges = (deviceId) =>
  getData(`/devices/${deviceId}/cartridges`);

export const refillCartridge = (deviceId, data) =>
  patchData(`/devices/${deviceId}/cartridges/add`, data);

export const replaceCartridge = (deviceId, data) =>
  patchData(`/devices/${deviceId}/cartridges/replace`, data);
