import React from "react";
import { featureItems } from "../../assets/Categories";
import { FaHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { FaRetweet } from "react-icons/fa";

import "./Features.css";
const Features = () => {
  return (
    <>
      <div className="feature-products">
        {" "}
        <h3 className="d-flex">Features Products</h3>
        <div className="container justify-content-center d-flex">

          <div className=" AllProducts ">
            {featureItems.map((products) => {
              return (
                <>
                  <div className="product   " >
                    <div
                      className="product-image"
                      style={{ backgroundImage: `url(${products.item_image})` }}
                    >
                      <div className="icons">
                        <a href="">
                          <FaHeart />
                        </a>

                        <a href="">
                          {" "}
                          <FaRetweet />
                        </a>
                        <a href="">
                          {" "}
                          <IoIosCart />
                        </a>
                      </div>
                    </div>
                    {/* <img src={products.item_image} alt="" /> */}
                    <h5>{products.item_name}</h5>
                    <h4>$30.00</h4>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
