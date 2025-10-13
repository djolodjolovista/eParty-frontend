import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import type { LoginData, LoginResponse } from "@/types/api";
import { login } from "@/api/authApi";
import toast from "react-hot-toast";

export const useLoginMutation = () => {
  const setLogin = useAuthStore((state) => state.login);

  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: login,
    onSuccess: (data) => {
      setLogin(data.accessToken, data.user);
      toast.success("Login successful!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
