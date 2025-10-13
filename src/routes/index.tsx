import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./paths";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const LandingPage = lazy(() => import("@/pages/landing/LandingPage"));
const ForgotPasswordPage = lazy(
  () => import("@/pages/auth/forgot-password/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(
  () => import("@/pages/auth/reset-password/ResetPasswordPage")
);
const RegisterPage = lazy(() => import("@/pages/auth/register/RegisterPage"));
const LoginPage = lazy(() => import("@/pages/auth/login/LoginPage"));
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));

const suspenseWrapper = (element: React.ReactNode) => (
  <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: suspenseWrapper(<LandingPage />),
  },
  {
    path: "",
    element: <PublicRoute />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: suspenseWrapper(<LoginPage />),
          },
          {
            path: ROUTES.REGISTER,
            element: suspenseWrapper(<RegisterPage />),
          },
          {
            path: ROUTES.FORGOTPASSWORD,
            element: suspenseWrapper(<ForgotPasswordPage />),
          },
          {
            path: ROUTES.RESET_PASSWORD,
            element: suspenseWrapper(<ResetPasswordPage />),
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: suspenseWrapper(<DashboardPage />),
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
