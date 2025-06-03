import axios from "axios";
import { useAuthStore } from "../store/authStore";

// 서버 통신 설정 axios 객체
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // .env 파일 api 통신 주소
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키 포함
});

// refresh token과 access token 관리 (향후)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401 에러: 토큰 만료 or 권한 없음");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
