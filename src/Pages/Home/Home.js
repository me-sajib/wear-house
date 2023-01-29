import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import TopSeller from "../TopSeller/TopSeller";
import Banner from "./Banner";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <ServiceDetails />
      <TopSeller />
    </div>
  );
};

export default Home;
