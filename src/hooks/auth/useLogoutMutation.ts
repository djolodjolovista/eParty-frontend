import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { logout } from "@/api/authApi";
import toast from "react-hot-toast";

export const useLogoutMutation = () => {
  const logoutUser = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      logoutUser();
    },
    onError: (err) => {
      logout();
      toast.error(err.message);
    },
  });
};
