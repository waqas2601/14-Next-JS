export default function DisplayUsers() {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">User List</h1>

      <div className="text-gray-600">
        {/* Later: map users here */}
        <p className="text-center text-gray-500">No users yet...</p>
      </div>
    </div>
  );
}
