"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <h1>Login page for routing in Next.JS</h1>
      <button
        onClick={() => router.push("/login/loginuser")}
        className="btn-primary"
      >
        Login User
      </button>
      <br />
      <br />
      <Link href="/" className="btn-primary">
        Go to Home Page
      </Link>
    </>
  );
};

export default Login;
