import { postData } from "./apiClient";

export const signup = (data) => postData("/auth/signup", data);
export const login = (data) => postData("/auth/login", data);
