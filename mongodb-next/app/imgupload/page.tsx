"use client";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first!");
    console.log("Uploading file:", file);

    const data = new FormData();
    data.set("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    // Tell TypeScript what the response JSON looks like
    const result: { success: boolean; message?: string; url?: string } =
      await res.json();

    console.log(result);

    if (result.success) {
      alert("File uploaded successfully!");
    } else {
      alert(result.message || "Upload failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Upload Image</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-6"
        >
          <label
            htmlFor="file"
            className="w-full cursor-pointer border-2 border-dashed border-gray-400 hover:border-blue-500 transition-all rounded-xl p-6 flex flex-col items-center justify-center bg-white/5 text-gray-300 hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 014-4h10a4 4 0 014 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 10V6a5 5 0 0110 0v4"
              />
            </svg>
            <span className="text-sm font-medium">
              {file ? file.name : "Click or drag & drop to upload"}
            </span>
            <input
              id="file"
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              className="hidden"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
