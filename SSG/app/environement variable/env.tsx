export default function Enviroment() {
  console.log(process.env.DB_PASSWORD);

  return (
    <>
      <h1>Enviroment Variables</h1>
      {process.env.NODE_ENV == "development" ? (
        <h1>You are on development mode</h1>
      ) : (
        <h1>You are on production mode</h1>
      )}
    </>
  );
}
