import React, { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
