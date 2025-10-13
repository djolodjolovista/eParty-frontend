import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "./paths";

const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => !!state.accessToken);

  // Ako je user logovan, preusmjeri ga na dashboard
  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
