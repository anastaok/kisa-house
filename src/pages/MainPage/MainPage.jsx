import React from "react";
import "./MainPage.scss";
import { Footer, Header, Kisa, Video } from "../../components";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Video />
      <div className="main-page">
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
