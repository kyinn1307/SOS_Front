import { getData, patchData } from "../apiClient";

export const getCartridges = (deviceId) =>
  getData(`/devices/${deviceId}/cartridges`);

export const refillCartridge = (deviceId, catridgeId, data) =>
  patchData(`/devices/${deviceId}/cartridges/${catridgeId}/refill`, data);

export const replaceCartridge = (deviceId, cartridgeId) =>
  patchData(`/devices/${deviceId}/cartridges/${cartridgeId}/replace`);
