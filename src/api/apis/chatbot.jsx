import { postData } from "./apiClient";

export const startChatSession = (data) => postData("/chatbot/session", data);
