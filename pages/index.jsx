import Footer from "@/components/Footer/Footer";
import React from "react";
import Carousel from "./carousel";
import Homepage from "./homepage";

const Home = () => {
  return <div>
  <Carousel />
  <br/>
  <Homepage/>
  <br/>
  <Footer/>
  </div>;
};

export default Home;
