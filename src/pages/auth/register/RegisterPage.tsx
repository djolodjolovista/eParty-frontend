import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Icon from "@/assets/Icon";

const RegisterPage = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded shadow-md flex flex-col gap-10">
      <RegisterForm />
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

export default RegisterPage;
