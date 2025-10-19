// src/hooks/useGoogleLogin.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { googleLogin } from "@/api/authApi";
import { useAuthStore } from "@/store/authStore";

export const useGoogleLogin = () => {
  const setUser = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: googleLogin,
    onSuccess: (data) => {
      setUser(data.accessToken, data.user);
      toast.success("Logged in successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
