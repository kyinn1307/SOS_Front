import { postData } from "./apiClient";

export const sendHardwareCommand = (data) =>
  postData("/hardware/command", data);

export const updateHardwareStatus = (data) =>
  postData("/webhook/hardware/status", data);
