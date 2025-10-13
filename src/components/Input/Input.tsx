import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({ error, className = "", ref, ...props }: InputProps) => {
  return (
    <input
      ref={ref}
      className={`w-full p-2 border rounded focus:outline-none ${
        error
          ? "border-red-500 focus:border-red-600"
          : "border-gray-300 focus:border-blue-500"
      } ${className}`}
      {...props}
    />
  );
};

export default Input;
