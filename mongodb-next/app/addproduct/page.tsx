"use client";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.success ? "Product added!" : "Error adding product");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
        />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="company" placeholder="Company" onChange={handleChange} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}
