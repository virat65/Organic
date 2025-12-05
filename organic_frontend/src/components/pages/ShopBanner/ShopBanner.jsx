import React from "react";
import "./ShopBanner.css";
import { FaHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { FaRetweet } from "react-icons/fa";
import { categoriItems } from "../../../assets/Categories";

const ShopBanner = () => {
  return (
    <>
      <div className="shopContainer">
        <div className="container">
          <div className="row">
            <div className="shopBanner ">
              <h2>Organic Shop</h2>
              <span className="fw-bold fs-5">Home Shop</span>
            </div>
          </div>
          <div className="row row-cols-md-2 row-cols-1 ">
            <div className="col-12 col-md-3   ">
              <div className="sidebar">
                <div className="deparment  justify-content-center">
                  <h3>Deparment</h3>
                  <ul className="p-0 ">
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                    <li><a href="#">Fresh Berries</a></li>
                    <li><a href="#">Ocean Foods</a></li>
                    <li><a href="#">Butter &amp; Eggs</a></li>
                    <li><a href="#">Fastfood</a></li>
                    <li><a href="#">Fresh Onion</a></li>
                    <li><a href="#">Papaya &amp; Crisps</a></li>
                    <li><a href="#">Oatmeal</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-12 ">
              <h3>Sale Off</h3>
              <div className="product-discount">
                <div className="scroll-wrapper">
                  <div className="products d-flex gap-5">
                    {/* First Copy */}
                    {categoriItems.map((item, index) => (
                      <div className="items" key={`first-${index}`}>
                        <div className="image-container">
                          <img src={item.item_image} alt={item.item_name} className="img-fluid" />
                          <div className="overflow-off">
                            <span>-20%</span>
                          </div>
                          <div className="overflow-icons">
                            <a href=""><FaHeart /></a>
                            <a href=""><FaRetweet /></a>
                            <a href=""><IoIosCart /></a>
                          </div>
                        </div>
                        <div className="item-text d-flex flex-column align-items-center">
                          <span>{item.item_category}</span>
                          <h5>{item.item_name}</h5>
                          <div className="price">
                            <span>$30.00 &nbsp;</span>
                            <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Duplicate Copy */}
                    {categoriItems.map((item, index) => (
                      <div className="items" key={`second-${index}`}>
                        <div className="image-container">
                          <img src={item.item_image} alt={item.item_name} className="img-fluid" />
                          <div className="overflow-off">
                            <span>-20%</span>
                          </div>
                          <div className="overflow-icons">
                            <a href=""><FaHeart /></a>
                            <a href=""><FaRetweet /></a>
                            <a href=""><IoIosCart /></a>
                          </div>
                        </div>
                        <div className="item-text d-flex flex-column align-items-center">
                          <span>{item.item_category}</span>
                          <h5>{item.item_name}</h5>
                          <div className="price">
                            <span>$30.00 &nbsp;</span>
                            <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
