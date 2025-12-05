import React from "react";
import "./BlogPage.css";
import { FaCalendar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
// import Blog from "../../Blog/Blog";
import Blog from "../../Blog/Blog";
const BlogPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <img
                src="https://preview.colorlib.com/theme/ogani/img/breadcrumb.jpg.webp"
                alt=""
                className="position-relative"
              />
              <h2 className="position-absolute  bottom-50  start-50 fw-bold text-white">
                Blog
              </h2>
              <p className="position-absolute top-50 start-50 text-white fw-bold">Home--Blog</p>
            </div>
          </div>
          <div className="row my-5">
            <Blog hideTitle={true}  showButtons ={true}/>
             <div className="col  card-size">
                          <div className="card">
                            <img
                              src="https://preview.colorlib.com/theme/ogani/img/blog/blog-5.jpg.webp"
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
                              <h5 className="card-title fw-bold">Visit the clean farm in the US</h5>
                              <p className="card-text">
                                This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is a
                                little bit longer.
                              </p>
                            </div>
                          </div> <button>
                  Read More <IoIosArrowRoundForward />
                </button>
                        </div>
                        <div className="col  card-size">
                          <div className="card">
                            <img
                              src="https://preview.colorlib.com/theme/ogani/img/blog/blog-6.jpg.webp"
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
                              <h5 className="card-title fw-bold">The Moment You Need To Remove Garlic From The Menu</h5>
                              <p className="card-text">
                                This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is a
                                little bit longer.
                              </p>
                            </div>
                          </div> <button>
                  Read More <IoIosArrowRoundForward />
                </button>
                        </div> <div className="col  card-size">
                          <div className="card">
                            <img
                              src="https://preview.colorlib.com/theme/ogani/img/blog/blog-4.jpg.webp"
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
                              <h5 className="card-title fw-bold">Visit the clean farm in the US</h5>
                              <p className="card-text">
                                This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is a
                                little bit longer.
                              </p>
                            </div>
                          </div> <button>
                  Read More <IoIosArrowRoundForward />
                </button>
                        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
