import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/api/authApi";
import toast from "react-hot-toast";

export const useForgotPassword = () => {
  return useMutation<string, Error, string>({
    mutationFn: forgotPassword,
    onSuccess: (email) => {
      forgotPassword(email);
      toast.success("Email sent successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
