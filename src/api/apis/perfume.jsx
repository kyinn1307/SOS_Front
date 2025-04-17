import { postData } from "./apiClient";

export const createCustomPerfume = (data) => postData("/perfumes/custom", data);

export const createOriginalPerfume = (data) =>
  postData("/perfumes/original", data);

export const checkPerfumeStatus = (perfumeId) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/ws/perfumes/${perfumeId}`
  );

  socket.onopen = () => {
    console.log("WebSocket 연결 성공!");
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
