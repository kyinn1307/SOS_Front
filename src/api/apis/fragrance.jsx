import { getData } from "./apiClient";

export const fetchFragranceCategories = () => getData("/fragrances/category");

export const sendFragranceDetails = (deviceId, fragranceDetails) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/ws/fragrances/detail${deviceId}`
  );

  socket.onopen = () => {
    console.log("WebSocket 연결이 성공적으로 이루어졌습니다.");
    socket.send(JSON.stringify(fragranceDetails));
  };

  socket.onmessage = (event) => {
    console.log("서버로부터 받은 메시지:", event.data);
  };

  socket.onerror = (error) => {
    console.error("WebSocket 오류 발생:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket 연결이 종료되었습니다.");
  };
};
