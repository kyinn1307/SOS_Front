import { getData, patchData } from "../apiClient";

export const getCartridges = (deviceId) =>
  getData(`/devices/${deviceId}/cartridges`);

export const refillCartridge = (deviceId, catridgeId, data) =>
  patchData(`/devices/${deviceId}/cartridges/${catridgeId}refill`, data);

export const replaceCartridge = (deviceId, cartridgeId) =>
  patchData(`/devices/${deviceId}/cartridges/${cartridgeId}/replace`);

export const sendCartridgeWarning = (deviceId, catridgeId) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/alert/${deviceId}/${catridgeId}`
  );

  socket.onopen = () => {
    console.log("WebSocket 연결 성공!");
    socket.send(JSON.stringify({ warning: "잔량 부족" }));
  };

  socket.onmessage = (event) => {
    console.log("서버에서 받은 메시지:", event.data);
  };

  socket.onerror = (error) => {
    console.error("WebSocket 오류 발생:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket 연결 종료");
  };
};
