import Link from "next/link";
import getUsers, { User } from "@/app/services/getUsers";

export const revalidate = 0; // SSG

export default async function Page() {
  const users: User[] = await getUsers();
  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
