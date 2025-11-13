"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        {/* Logo / Hero Image */}
        <div className="mb-8">
          <Image
            src="/logo.png" // replace with your logo if you have one
            alt="CRUD App Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My CRUD App
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-6">
          Manage your products efficiently. Create, edit, update, and delete
          products seamlessly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => router.push("/products")}
          >
            View Products
          </button>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            onClick={() => router.push("/products/create")}
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Footer / Illustration */}
      <div className="mt-16">
        <Image
          src="/dashboard-illustration.png" // optional illustration
          alt="Dashboard Illustration"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
