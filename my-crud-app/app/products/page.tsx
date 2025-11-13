"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export default function ProductListPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{ open: boolean; id?: string }>({
    open: false,
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) setProducts(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) fetchProducts();
      else alert(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setModal({ open: false });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => router.push("/products/create")}
      >
        + Add Product
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-xl">{p.name}</h2>
            <p>Price: ${p.price}</p>
            <p>Category: {p.category}</p>
            <p className="text-gray-600">{p.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={() => router.push(`/products/${p._id}/edit`)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => setModal({ open: true, id: p._id })}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modal.open && modal.id && (
        <Modal
          message="Are you sure you want to delete this product?"
          onConfirm={() => handleDelete(modal.id!)}
          onCancel={() => setModal({ open: false })}
        />
      )}
    </div>
  );
}
