import Header from "./Header";
import Footer from "./Footer";

import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <Header />
      <main className="pt-16 lg:pt-[4.5rem]">{children}</main>
      <Footer />
    </div>
  );
}
