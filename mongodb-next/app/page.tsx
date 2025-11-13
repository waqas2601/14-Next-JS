import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-extrabold text-2xl text-center mb-6">
        Working with MongoDB for Next.js
      </h1>
      <Link
        className="text-blue-600 hover:text-blue-800 underline block text-center mb-6"
        href="/addproduct"
      >
        Add Products
      </Link>
      <Link
        className="text-blue-600 hover:text-blue-800 underline block text-center mb-6"
        href="/products"
      >
        Products
      </Link>
      <Link
        className="text-blue-600 hover:text-blue-800 underline block text-center mb-6"
        href="/imgupload"
      >
        Upload Image
      </Link>
    </>
  );
}
