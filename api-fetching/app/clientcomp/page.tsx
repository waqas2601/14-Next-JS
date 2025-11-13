"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setProducts(json.products);
      console.log(json.products);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-4">Product List</h1>

      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

