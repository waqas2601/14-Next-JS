"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";
import Loader from "@/app/components/Loader";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export default function EditProductPage({
  params,
}: {
  params: { productid: string };
}) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { productid } = params;

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch(`/api/products/${productid}`);
        const data = await res.json();
        if (data.success) setProduct(data.result);
        else alert(data.message);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [productid]);

  const handleSubmit = async (data: any) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/products/${productid}`, {
        method: "PUT",
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
      setSaving(false);
    }
  };

  if (loading) return <Loader />;
  if (!product)
    return <p className="text-center text-red-600">Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Product</h1>
      <ProductForm
        initialData={product}
        onSubmit={handleSubmit}
        loading={saving}
      />
    </div>
  );
}
