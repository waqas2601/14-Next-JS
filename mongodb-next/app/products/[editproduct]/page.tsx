"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  _id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export default function EditProductPage({
  params,
}: {
  params: { productid: string }; // ✅ direct object, not Promise
}) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const productid = params.productid; // ✅ access directly

  useEffect(() => {
    async function loadProduct() {
      try {
        console.log("Edit product ID:", productid);

        const res = await fetch(`/api/products/${productid}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        if (data.success) {
          setProduct(data.result);
        } else {
          alert(data.message || "Product not found");
        }
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productid]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!product) return;
    setSaving(true);

    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Product updated successfully!");
        router.push("/products");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server error updating product");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="p-8 text-gray-600">Loading...</p>;

  if (!product)
    return (
      <p className="p-8 text-red-600">Product not found or failed to load.</p>
    );

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {saving ? "Saving..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}
