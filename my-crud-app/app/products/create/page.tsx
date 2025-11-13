"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";

export default function CreateProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) router.push("/products");
      else alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Product</h1>
      <ProductForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
