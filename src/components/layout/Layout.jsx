import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
