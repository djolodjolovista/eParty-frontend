import Icon from "@/assets/Icon";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-10">
      <ForgotPasswordForm />
      <Link
        to="/login"
        className="w-full flex items-center justify-center gap-1.5 text-sm !text-gray-500 hover:!text-gray-600 transition"
      >
        <Icon icon="back-arrow" />
        <span>Back to login</span>
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
