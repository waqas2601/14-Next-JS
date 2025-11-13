"use client";

interface ClientButtonProps {
  price: number;
}

export default function ClientButton({ price }: ClientButtonProps) {
  return (
    <button
      onClick={() => alert(price)}
      className="bg-blue-500 text-white px-3 py-1 rounded ml-1 cursor-pointer"
    >
      Check Price
    </button>
  );
}
