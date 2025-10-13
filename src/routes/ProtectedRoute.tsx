import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./paths";
import { useAuthStore } from "@/store/authStore";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.accessToken);
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
