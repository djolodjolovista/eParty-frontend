import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "./Input";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const PasswordInput = ({ error, label, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        label={label || "Password"}
        type={showPassword ? "text" : "password"}
        error={error}
        className="pr-10"
        {...props}
      />
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 hover: cursor-pointer">
        {showPassword ? (
          <EyeOff onClick={() => setShowPassword((prev) => !prev)} size={18} />
        ) : (
          <Eye onClick={() => setShowPassword((prev) => !prev)} size={18} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
