import React from "react";
import "./Products.css";
const Products = () => {
  return (
    <>
      <div className="products-card">
        <div className="container">
          <div className="row  justify-content-evenly ">
            <div className="col-md-4 col-sm-6 col-12">
              <h4 className="d-flex  justify-content-center ">Review Products</h4>
              <div className="productCard d-flex justify-content-left align-items-center  gap-3  my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-1.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Green Palak </span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-2.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Capsicum</span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-3.jpg.webp"
                  alt=""
                />
                <div className="text  d-flex flex-column  ">
                  <span>Fresh Chicken </span>
                  <h2>$30.00</h2>
                </div>
              </div>
            </div> <div className="col-md-4 col-sm-6 col-12  ">
              <h4 className="d-flex  justify-content-center ">Top Rated Products</h4>
              <div className="productCard d-flex justify-content-left align-items-center  gap-3  my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-1.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Green Palak </span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-2.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Capsicum</span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left  align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-3.jpg.webp"
                  alt=""
                />
                <div className="text d-flex flex-column  ">
                  <span>Fresh Chicken </span>
                  <h2>$30.00</h2>
                </div>
              </div>
            </div> <div className="col-md-4  col-sm-6 col-12">
              <h4 className="d-flex  justify-content-center ">Latest Products</h4>
              <div className="productCard d-flex justify-content-left  align-items-center  gap-3  my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-1.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Green Palak </span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-2.jpg.webp"
                  alt=""
                />
                <div className="text">
                  <span>Capsicum</span>
                  <h2>$30.00</h2>
                </div>
              </div>
              <div className="productCard d-flex justify-content-left  align-items-center gap-3 my-4">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/latest-product/lp-3.jpg.webp"
                  alt=""
                />
                <div className="text d-flex flex-column  ">
                  <span>Fresh Chicken </span>
                  <h2>$30.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
