"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1>About page for routing in Next.JS</h1>
      <button
        onClick={() => router.push("/about/aboutuser")}
        className="btn-primary"
      >
        About User
      </button>
      <br />
      <br />
      <Link href="/" className="btn-primary">
        Go to Home Page
      </Link>
    </>
  );
};
export default About;
