export const sendFragranceRecipe = (deviceId) => {
  const socket = new WebSocket(
    `wss://api.scentofsound.com/ws/fragrances/detail${deviceId}`
  );

  socket.onopen = () => {
    console.log("WebSocket 연결 성공!");
    socket.send(JSON.stringify({ recipe: "향수 레시피" }));
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
