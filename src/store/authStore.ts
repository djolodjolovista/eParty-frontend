import type { User } from "@/types/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (accessToken: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      accessToken: null,
      user: null,
      login: (accessToken, user) => set({ accessToken, user }),
      logout: () => set({ accessToken: null, user: null }),
    }),
    { name: "authStore" }
  )
);
