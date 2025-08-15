import React from "react";
import { Banners } from "../../assets/Categories";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      {" "}
      <div className="Banner">
        {Banners.map((item) => {
          return (
            <>
            <div className="container-fluid">

<div className="container">

<div className="row">
  <div className="">

              <img src={item.item_image} alt="" />
  </div>

</div>
</div>
            </div>
            </>
          );
        })}
      </div>{" "}
    </>
  );
};

export default Banner;
