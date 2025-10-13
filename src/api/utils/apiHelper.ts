import { AxiosError } from "axios";
import type { ApiError } from "@/types/api";

export const handleApiError = (err: unknown): never => {
  const error = err as AxiosError<ApiError>;
  throw (error.response?.data || {
    success: false,
    message: "Something went wrong",
  }) as ApiError;
};
