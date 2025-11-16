import AddUsers from "./components/Addusers";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <>
      <h1 className="font-extrabold text-2xl text-center">
        Redux Toolkit in Next.JS
      </h1>
      <AddUsers />
      <DisplayUsers />
    </>
  );
}
