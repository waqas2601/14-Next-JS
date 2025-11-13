async function loaderapi() {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });

  const data = await res.json();
  return data.users;
}

export default async function Page() {
  const users = await loaderapi();

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Loader for fetching Api</h1>

      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="border p-2 rounded">
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}
