import type { RegisterData } from "@/features/auth/registerSchema";
import apiClient from "./utils/apiClient";
import type { LoginData } from "@/features/auth/loginSchema";
import { handleApiError } from "./utils/apiHelper";
import type { GoogleLoginData, LoginResponse } from "@/types/api";

export const login = async (credentials: LoginData): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/auth/logout", {});
  } catch (error) {
    throw handleApiError(error);
  }
};

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const refreshAccessToken = async (): Promise<LoginResponse> => {
  const res = await apiClient.post("/auth/refresh", {}); // cookie poslan automatski
  return res.data.data;
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await apiClient.post("/auth/forgot-password", { email });
    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await apiClient.post(`/auth/reset-password/${token}`, {
      newPassword,
    });
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const googleLogin = async (
  data: GoogleLoginData
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post("/auth/google", data, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
