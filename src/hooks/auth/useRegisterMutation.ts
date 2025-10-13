import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/authApi";
import toast from "react-hot-toast";
import type { RegisterData } from "@/features/auth/registerSchema";
import { useAuthStore } from "@/store/authStore";
import type { LoginResponse } from "@/types/api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/paths";

export const useRegisterMutation = () => {
  const setLogin = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, RegisterData>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setLogin(data.accessToken, data.user);
      toast.success("Registration successful!");
      navigate(ROUTES.DASHBOARD);
    },
    onError: (err) => {
      toast.error(err.message || "Registration failed");
    },
  });
};
