import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <h1 className="font-extrabold text-2xl">Common layout for Login pages</h1>
      {children}
    </>
  );
};

export default Layout;
