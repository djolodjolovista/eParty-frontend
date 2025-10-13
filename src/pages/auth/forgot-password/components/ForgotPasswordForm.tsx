import { useState } from "react";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const passwordForget = useForgotPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    passwordForget.mutate(email);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
