import Image from "next/image";
import Enviroment from "./environement variable/env";

export default function Home() {
  return (
    <>
      <h1 className="font-extrabold text-3xl text-center">
        Static Site Generation (SSG)
      </h1>
      <Enviroment />
    </>
  );
}
