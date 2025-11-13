"use client";
import { useRouter } from "next/navigation";

const LoginUser = () => {
  const router = useRouter();
  return (
    <>
      <h1>This is a nesting page of nesting routing.</h1>
      <button onClick={() => router.push("/login")} className="btn-primary">
        Go to Login
      </button>
    </>
  );
};
export default LoginUser;
