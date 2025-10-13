import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput, Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import {
  registerSchema,
  type RegisterData,
} from "@/features/auth/registerSchema";
import { useRegisterMutation } from "@/hooks/auth/useRegisterMutation";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });
  const registerMutation = useRegisterMutation();

  const onSubmit = async (data: RegisterData) => {
    registerMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <h3 className="font-bold">Registration</h3>

      <div>
        <Input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
          error={errors.firstName?.message}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
          error={errors.lastName?.message}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <PasswordInput
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
