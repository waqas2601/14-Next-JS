"use client";

import { useState } from "react";
import { addUser } from "../slice";
import { useDispatch } from "react-redux";
export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Add User</h1>

      <input
        type="text"
        placeholder="Add New User"
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <button
        onClick={userDispatch}
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
         hover:bg-blue-700 active:scale-95 transition"
      >
        Add User
      </button>
    </div>
  );
}
