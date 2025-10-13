import { Link, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "@/hooks/auth/useResetPassword";
import {
  resetPasswordSchema,
  type ResetPasswordData,
} from "@/features/auth/resetPasswordSchema";
import toast from "react-hot-toast";
import PasswordInput from "@/components/Input/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import Icon from "@/assets/Icon";

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const mutation = useResetPasswordMutation();

  const onSubmit = (data: ResetPasswordData) => {
    if (!token) {
      toast.error("Invalid or missing token.");
      return;
    }

    mutation.mutate({ token: token!, password: data.password });
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-md mx-auto"
        noValidate
      >
        <h3 className="font-bold text-lg">Reset Password</h3>

        <div>
          <PasswordInput
            placeholder="New Password"
            {...register("password")}
            error={errors.password?.message}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <PasswordInput
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          variant="primary"
          className="w-full"
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Resetting..." : "Reset Password"}
        </Button>

        <div className="text-center text-sm mt-4">
          <Link
            to="/login"
            className="w-full flex items-center justify-center gap-1.5 text-sm !text-gray-500 hover:!text-gray-600 transition"
          >
            <Icon icon="back-arrow" />
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
