import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="cotainer-fluid ">

          <div className="container d-flex flex-column gap-5 ">


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4  footer-cards justify-content-center gx-2 justify-content-sm-center  text-center ">
            <div className="col   ">
              <div className="footer-logo m-2">
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/logo.png.webp"
                  alt="" className="img-fluid"
                />
              </div>
              <div className="footer-details justify-content-center d-flex ">
                <ul className="justify-content-center text-center d-flex flex-column ">
                  <li>Address: 60-49 Road 11378</li>
                  <li>New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col  d-flex gap-5 justify-content-center d-flex  ">
              <div className="row ">
                    <h5 className="m-2 fw-bold  ">UseFul Links</h5>
                <ul className="footer-links ">


                  <li>About Us</li>
                  <li>About Our Shop</li>
                  <li>Secure Shopping</li>
                  <li>Delivery infomation</li>
                  <li>Privacy Policy</li>
                  <li>Our Sitemap</li>
                </ul>
              </div>
              <div className="row mt-5 services">
                <ul>
                  <li>Who We Are</li>
                  <li>Our Services</li>
                  <li>Projects</li>
                  <li>Contact</li>
                  <li>Innovation</li>
                  <li>Testimonials</li>
                </ul>
              </div>
            </div>
            <div className="col my-4 ">
              <h4 className="fw-bold">Join Our Newsletter Now</h4>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit" className="site-btn">
                  Subscribe
                </button>
              </form>
              <div className="footer-icons d-flex  justify-content-left gap-3  mt-3 ">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2  justify-content-between ps-0  ">
            <div className="col">
              <p className="">
                Copyright ©2025 All rights reserved | This template is made with
                by Colorlib
              </p>
            </div>

            <div className="col ">
              <a
                href="
            "
              >
                <img
                  src="https://preview.colorlib.com/theme/ogani/img/payment-item.png.webp"
                  alt="Bank-Cards"
                  className="ps-3 "
                />
              </a>
            </div> </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
