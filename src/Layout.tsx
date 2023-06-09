import React from "react";
import Header from "./components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
