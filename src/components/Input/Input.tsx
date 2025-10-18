import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <label
          className={`
            absolute -top-2.5 left-2 px-1 text-sm bg-white z-[1] transition font-medium text-[12px]
            ${error ? "text-red-500" : "text-gray-600"}
          `}
        >
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={`
            w-full px-3 py-2 border rounded-md bg-white text-sm
            focus:outline-none focus:ring-1
            ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }
            ${className}
          `}
        />
      </div>
    );
  }
);

export default Input;
