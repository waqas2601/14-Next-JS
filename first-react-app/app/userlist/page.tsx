"use client";

import Link from "next/link";

const UserList = () => {
  const usersArray = ["Waqas", "Ahmad", "Shah", "Khan"];

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Users List</h1>
      <ul className="space-y-2">
        {usersArray.map((user) => (
          <li key={user}>
            <Link
              href={`/userlist/${user}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {user}
            </Link>
          </li> 
        ))} 
      </ul>
    </>
  );
};

export default UserList;
