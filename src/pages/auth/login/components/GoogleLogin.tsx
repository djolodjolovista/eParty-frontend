import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@/hooks/auth/useGoogleLogin";
import toast from "react-hot-toast";

export const GoogleLoginButton = () => {
  const mutation = useGoogleLogin();

  return (
    <GoogleLogin
      width={384}
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          mutation.mutate({ credential: credentialResponse.credential });
        }
      }}
      onError={() => {
        toast.error("Google login failed");
      }}
    />
  );
};
