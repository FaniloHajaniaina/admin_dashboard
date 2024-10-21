import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
