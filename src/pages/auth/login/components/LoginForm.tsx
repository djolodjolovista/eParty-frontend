import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput, Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { loginSchema, type LoginData } from "@/features/auth/loginSchema";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";
import { useAuthStore } from "@/store/authStore";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import { GoogleLoginButton } from "./GoogleLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        useAuthStore.getState().login(res.accessToken, res.user);
        navigate(ROUTES.DASHBOARD);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <h3 className="font-bold text-xl">Login</h3>
      <div>
        <Input
          label="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <PasswordInput
          {...register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <div className="text-right mt-1">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline transition"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Login
      </Button>
      <GoogleLoginButton />
      <div className="text-center text-sm mt-4">
        <span className="text-gray-600">Need an account? </span>
        <Link
          to="/register"
          className="text-blue-600 hover:underline transition"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
