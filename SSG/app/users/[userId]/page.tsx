import getUser from "@/app/services/getUser";
import getUsers, { User } from "@/app/services/getUsers";

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ userId: user.id.toString() }));
}

export default async function Page({ params }: { params: { userId: string } }) {
  const user: User = await getUser(params.userId);
  return <h1>{user.name}</h1>;
}
