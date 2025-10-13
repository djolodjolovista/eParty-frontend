import axios from "axios";
//import { isTokenExpired } from "@/api/functions/isTokenExpired";
//import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import { refreshAccessToken } from "../authApi";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "1.0.0",
    "App-Version": "1.0.0",
    Platform: "web",
  },
});

// request: dodaj access token iz store
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest) return Promise.reject(error);

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      document.cookie.includes("refreshToken")
    ) {
      originalRequest._retry = true;
      try {
        const { accessToken, user } = await refreshAccessToken();
        if (accessToken && user) {
          useAuthStore.getState().login(accessToken, user);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch {
        useAuthStore.getState().logout();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
