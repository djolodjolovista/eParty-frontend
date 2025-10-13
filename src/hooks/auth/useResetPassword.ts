import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "@/api/authApi";

type ResetPasswordPayload = {
  token: string;
  password: string;
};

export const useResetPasswordMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ token, password }: ResetPasswordPayload) =>
      resetPassword(token, password),

    onSuccess: () => {
      toast.success("Password reset successfully! You can now log in.");
      navigate("/login");
    },

    onError: (err) => {
      toast.error(err.message || "Failed to reset password. Try again.");
    },
  });
};
