async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      {users.map((user: any) => (
        <a
          key={user.id}
          href={`/users/${user.id}`}
          className="block p-3 border-b hover:bg-gray-100 cursor-pointer"
        >
          {user.name} (ID: {user.id})
        </a>
      ))}
    </div>
  );
}
