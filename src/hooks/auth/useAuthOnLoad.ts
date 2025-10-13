import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { refreshAccessToken } from "@/api/authApi";

export const useAuthOnLoad = () => {
  const setAuth = useAuthStore((s) => s.login);

  useEffect(() => {
    const init = async () => {
      // provjeri postoji li cookie s refresh tokenom
      //const hasRefreshToken = document.cookie.includes("refreshToken");
      //console.log("Token test->>>>", hasRefreshToken);
      //if (!hasRefreshToken) return; // nema session-a, ostani logged out

      try {
        const res = await refreshAccessToken(); // backend vraća { accessToken, user }

        if (res?.accessToken && res?.user) {
          setAuth(res.accessToken, res.user);
        }
      } catch (err) {
        console.log("No active session or refresh failed");
        // opcionalno: clear store ili redirect
        useAuthStore.getState().logout();
      }
    };

    init();
  }, [setAuth]);
};
