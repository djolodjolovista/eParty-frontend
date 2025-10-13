import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded font-semibold focus:outline-none transition disabled:opacity-50 disabled:!cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

export default Button;
