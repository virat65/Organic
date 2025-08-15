import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-section  ">
        <div className=" px-5 categori-section  ">
          <div className="contianer-fluid">
            <div className="row departmensts justify-content-between">
              <div className="col-lg-3 d-flex justify-content-start col-12  mb-lg-0 mb-3 categori-section-left d-flex align-items-lg-center h-100 ">
                <div className="menu-icon py-2 ">
                  <IoMenu />
                </div>
                <div className="dropdown ">
                  <button
                    className="btn    dropdown-toggle text-light px-2  justify-content-start"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Deparments
                  </button>
                  <ul className="dropdown-menu w-100 ">
                    <li>
                      <a className="dropdown-item" href="#">
                        Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Nuts Gift
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fresh Meat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fresh Berries
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ocean Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Butter & Egg
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        FastFood
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FastFood
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Milk & Ghee
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fresh Onion
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Fresh Bananas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 d-flex col-lg-5  categori-section-mid d-flex justify-content-between ">
                <div className="  align-items-center mx-3 d-none d-lg-flex ">
                  <span> All&nbsp;Categories</span> &nbsp;
                  <div className="arrow-icon">
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="search-box   ">
                  <input
                    type="text"
                    placeholder="What do yo u need?"
                    className=""
                  />{" "}
                  <button type="submit" className="  ">
                    SEARCH
                  </button>
                </div>
              </div>
              <div className="col-3 categori-section-right d-lg-flex  d-none justify-content-evenly align-items-center">
                <div className="phone-icon">
                  <IoCall />
                </div>
                <div className="phone-num">
                  <span>+65 11.188.888</span> <br />
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-section mb-4 h-100 w-80">
          <h6>Fresh Fruits</h6>
          <h2>Vegetables</h2>
          <h2>100% Organic</h2>
          <p>Free Pickup and Delivery Available</p>
          <div className="shop-btn">
            <a href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
