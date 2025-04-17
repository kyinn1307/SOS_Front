import { getData, patchData } from "../apiClient";

export const getCartridges = (deviceId) =>
  getData(`/devices/${deviceId}/cartridges`);

export const refillCartridge = (deviceId, data) =>
  patchData(`/devices/${deviceId}/cartridges/add`, data);

export const replaceCartridge = (deviceId, data) =>
  patchData(`/devices/${deviceId}/cartridges/replace`, data);

export const sendCartridgeWarning = (deviceId) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/recipes/detail/${deviceId}`
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
