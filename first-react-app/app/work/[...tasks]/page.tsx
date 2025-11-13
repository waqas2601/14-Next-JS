export default function UserTask({ params }: { params: { tasks?: string[] } }) {
  const { tasks } = params;

  console.log("Tasks:", tasks);

  return (
    <>
      <h1>Catch-All Route Example</h1>
      {tasks ? (
        <p>Segments: {tasks.join(" / ")}</p>
      ) : (
        <p>No segments provided</p>
      )}
    </>
  );
}
