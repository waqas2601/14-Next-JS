async function getUser(id: string) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });
  console.log(res);

  if (!res.ok) return null;
  return res.json();
}

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId);

  if (!user) {
    return <h1 className="text-red-500 text-xl p-6">User Not Found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Age:</strong> {user.age ?? "N/A"}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username ?? "N/A"}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone ?? "N/A"}
      </p>
    </div>
  );
}
