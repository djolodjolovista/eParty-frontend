import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (tokenString: string) => {
  const token = jwtDecode(tokenString);
  if (!token || typeof token !== "object") {
    return true;
  }
  const currentTime = Math.floor(Date.now() / 1000);

  if (token.exp && currentTime > token.exp) {
    return true;
  }

  return false;
};
