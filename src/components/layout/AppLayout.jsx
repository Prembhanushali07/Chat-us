import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "../shared/Title";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export default AppLayout;
