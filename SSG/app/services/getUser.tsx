import { User } from "./getUsers";

// Fetch single user by ID
export default async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data as User;
}
