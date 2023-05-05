import Header from "./Header";
import Footer from "./Footer";

import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
