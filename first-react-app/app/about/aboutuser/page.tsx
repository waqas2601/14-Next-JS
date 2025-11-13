"use client";
import { useRouter } from "next/navigation";

const AboutUser = () => {
  const router = useRouter();
  return (
    <>
      <h1>This is a nesting page of nesting routing.</h1>
      <button onClick={() => router.push("/about")} className="btn-primary">
        Go to About
      </button>
    </>
  );
};
export default AboutUser;
