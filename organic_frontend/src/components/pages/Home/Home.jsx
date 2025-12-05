import React from "react";

import Banner from "../../Banner/Banner";
import Categories from "../../Categories/Categories";
import Products from "../../Products/Products";
import Features from "../../Features/Features";
import Hero from "../../Hero/Hero";
import Blog from "../../Blog/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Features />
      <Banner />
      <Products />
      <Blog />
    </>
  );
};

export default Home;
