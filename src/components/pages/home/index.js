import React from "react";
import Header from "../../shared/header";
import "../../sass/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header title="Home" />
      <div className="home__sec">
        {" "}
        <h2>Welcome to Taiyo 🙏</h2>
        <h3>By-Abhay Tiwari</h3>
      </div>
    </div>
  );
};

export default Home;
