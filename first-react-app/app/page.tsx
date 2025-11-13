"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CSRPage from "./CSRPage";
import SSRPage from "./SSRPage";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1 className="font-bold text-center  text-2xl ">
        Hey I am learning Next.JS
      </h1>
      <Link href="/login" className="btn-link">
        Go to Login Page
      </Link>
      <br /> <br />
      <Link href="/about" className="btn-link">
        Go to About Page
      </Link>
      <br />
      <br />
      <Link href="/userlist" className="btn-link">
        Go to Users List
      </Link>
      <br />
      <br />
      <Link href="/work" className="btn-link">
        Go to User Work
      </Link>
      {/* <button onClick={() => router.push("/login")} className="btn-primary">
        Login Page Button
      </button> */}
      {/* <SSRPage /> */}
      {/* <CSRPage /> */}
    </>
  );
}
