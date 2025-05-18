import { postData } from "../apiClient";

export const startChatSession = (data) => postData("/chat/sessions", data);
