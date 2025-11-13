"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-extrabold text-2xl ">
        Fetching Apis in client component and server component
      </h1>
      <Link href="/clientcomp" className="btn-link">
        Go to Client Component
      </Link>
      <br />
      <Link href="/servercomp" className="btn-link">
        Go to Server Component
      </Link>
      <br />
      <Link href="/loaderapi" className="btn-link">
        Loader
      </Link>
    </>
  );
}
