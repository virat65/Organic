import React from "react";
import { categoriItems } from "../../assets/Categories";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="container my-5 categories  ms-5">
      <div className="row">
        <div className="scroll-wrapper">
          <div className="products">
            {/* First copy */}
            {categoriItems.map((item, index) => (
              <div className="items" key={`first-${index}`}>
                <img src={item.item_image} alt={item.item_name} />
                <h5>{item.item_name}</h5>
              </div>
            ))}

            {/* Duplicate copy for seamless scroll */}
            {categoriItems.map((item, index) => (
              <div className="items" key={`second-${index}`}>
                <img src={item.item_image} alt={item.item_name} />
                <h5>{item.item_name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
