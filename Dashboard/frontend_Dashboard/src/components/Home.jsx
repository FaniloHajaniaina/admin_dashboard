import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "250px" }}>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
