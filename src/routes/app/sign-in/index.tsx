import { useAuthStore } from "@/stores/auth";
import { SignInForm } from "./sign-in-form";
import { Navigate } from "react-router";

const SignIn = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center ">
      <SignInForm />
    </main>
  );
};

export default SignIn;
