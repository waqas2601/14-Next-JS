import ClientButton from "./ClientButton";

//  This runs on the SERVER side automatically (no "use client")
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);

  return data.products; //  return only the products array
}
export default async function Page() {
  const products = await getProducts(); //  server-side fetch
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-4">Products List</h1>

      <ul className="space-y-2">
        {products.map((p: any) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.description}
            <ClientButton price={p.price} />
          </li>
        ))}
      </ul>
    </div>
  );
}
