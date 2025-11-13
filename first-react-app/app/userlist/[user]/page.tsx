export default async function User({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  return (
    <>
      <h1 className="text-2xl font-semibold">User Details Page</h1>
      <p className="text-lg">Welcome, {user}!</p>
    </>
  );
}
