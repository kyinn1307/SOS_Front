import { postData } from "./apiClient";

export const startChatSession = (data) => postData("/chatbot/session", data);

export const sendChatMessage = (sessionId, message) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/ws/chatbot${sessionId}`
  );

  socket.onopen = () => {
    console.log("WebSocket 연결 성공!");
    socket.send(JSON.stringify({ message }));
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
