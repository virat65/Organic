import React from "react";
import { FaCalendar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";

import "./Blog.css";
const Blog = ({ hideTitle = false, showButtons = false }) => {
  return (
    <>
      <div className="blog">
        {!hideTitle && <h2>From the Blog</h2>}
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3  g-4 justify-content-evenly">
            <div className="col card-size ">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/blog/blog-3.jpg.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ">
                  <div className="date d-flex my-1   align-items-center">
                    <FaCalendar />
                    &nbsp;
                    <span> May 4,2019 &nbsp;</span>
                    <FaRegComment />
                    &nbsp; <span>5</span>
                  </div>
                  <h5 className="card-title">
                    Cooking tips make cooking simple
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
               {showButtons && (
                <button>
                  Read More <IoIosArrowRoundForward />
                </button>
              )}
            </div>
            <div className="col  card-size">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/blog/blog-2.jpg.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  {" "}
                  <div className="date d-flex my-1  align-items-center">
                    <FaCalendar />
                    &nbsp;
                    <span> May 4,2019 &nbsp;</span>
                    <FaRegComment />
                    &nbsp; <span>5</span>
                  </div>
                  <h5 className="card-title">
                    6 ways to prepare breakfast for 30
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.This content is a
                    little bit longer.
                  </p>
                </div>
              </div>{" "}
             {showButtons && (
                <button>
                  Read More <IoIosArrowRoundForward />
                </button>
              )}
            </div>
            <div className="col  card-size">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/blog/blog-1.jpg.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  {" "}
                  <div className="date d-flex my-1  align-items-center">
                    <FaCalendar />
                    &nbsp;
                    <span> May 4,2019 &nbsp;</span>
                    <FaRegComment />
                    &nbsp; <span>5</span>
                  </div>
                  <h5 className="card-title">Visit the clean farm in the US</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              {showButtons && (
                <button>
                  Read More <IoIosArrowRoundForward />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
