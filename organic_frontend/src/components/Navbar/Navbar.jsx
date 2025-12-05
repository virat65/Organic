import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import cookies from "js-cookie";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuopen, setIsMenopen] = useState(false);
  const getCookie = cookies.get("userInfo");
  const availableCookie = getCookie ? JSON.parse(getCookie) : null;
  console.log(availableCookie, "availableCookie");
  return (
    <>
      <div className="topbar container-fluid  px-5 py-2">
        <div className="row  justify-content-between ">
          <div className="col-6  topbar-left  d-flex align-items-center  ">
            <div className="row    w-100 ">
              <div className="col-5 topbar-left d-flex align-items-center justify-content-between  ">
                <span>
                  <IoMailSharp />
                  hello@colorlib.com
                </span>
              </div>
              <div className="col-7    d-flex ">
                {" "}
                <h4 className="fw-bold text-decoration-underline">
                  {availableCookie
                    ? `Welcome ${availableCookie.name}`
                    : `Welcome Guest`}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-5 topbar-right      align-items-center d-flex justify-content-between ">
            <div className="col-3   d-flex justify-content-between">
              <FaFacebook /> <FaTwitter />
              <FaLinkedinIn /> <FaPinterestP />
            </div>
            <div className="col-3 justify-content-evenly align-items-center   d-flex ">
              <img
                src="https://preview.colorlib.com/theme/ogani/img/language.png.webp"
                alt=""
              />
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3  d-flex  align-items-center justify-content-evenly ">
              <FaUser />

              {availableCookie ? (
                <a
                  onClick={() => {
                    cookies.remove("userInfo");

                    // redirect after toast
                    toast.success("Logout Successfully");
                    setTimeout(() => {
                      window.location.href = "/login";
                    }, 1000);
                  }}
                >
              
                  Logout
                </a>
              ) : (
                <a href="login">Login</a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  nav-section ">
        <nav className="navbar navbar-expand-lg ">
          <div className="row justify-content-between  w-100 ">
            <div className="col-3 logo-icon  d-flex justify-content-center  ">
              <a className="navbar-brand" href="/">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/logo.png.webp"
                  alt=""
                />
              </a>
            </div>
            <div className="col-5  align-items-center  d-flex  ">
              <div className={`menu-items w-100`}>
                <ul
                  className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex  justify-content-evenly   w-100 d-flex flex-row  ${
                    isMenuopen ? "show-menu" : "hide-menu"
                  } `}
                >
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>{" "}
                  <li className="nav-item">
                    <a className="nav-link " href="shop">
                      SHOP
                    </a>
                  </li>
                  <li className="nav-item">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDarkDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Pages
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="navbarDarkDropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="shop">
                                Shop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="blog">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="contact">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog">
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 cart-items justify-content-evenly ">
              <div className="row">
                <div className="cart-icons col-4 d-flex  align-items-center   justify-content-between w-50">
                  <FaHeart />
                  <GiShoppingBag />
                </div>
                <div className="cart-price col-4 d-flex align-items-center ">
                  <span>item: </span>
                  <span>$150.00</span>
                </div>
              </div>
            </div>
            <div
              className="col-1 menu-bar "
              onClick={() => {
                setIsMenopen(!isMenuopen);
              }}
            >
              <IoMenu />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
