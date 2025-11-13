// This is a Server Component by default

// SSR Example
export default async function SSRPage() {
  // Fetch data on the server
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // ensures fresh data every time
  });
  const users = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Server Side Rendering</h1>
      <ol className="list-decimal pl-5">
        {users.map((user: any) => (
          <li key={user.id} className="list-item">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
