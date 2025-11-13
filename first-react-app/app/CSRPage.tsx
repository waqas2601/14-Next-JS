"use client"; //  Makes this a Client Component

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function CSRPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Client Side Rendering</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
