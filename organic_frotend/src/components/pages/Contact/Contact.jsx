import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="contactBanner">
              <h2>Contact Us</h2>
              <span className="fw-bold fs-5">Home Contact Us </span>
            </div>
          </div>
          <div className="contact-details my-5">
            <div className="row  justify-content-center  py-5 row-cols-lg-4 row-cols-sm-2 col1">
              <div className="col  d-flex flex-column align-items-center gap-3 ">
                <a href="">
                  <FaPhoneAlt />
                </a>
                <div className="text  d-flex flex-column justify-content-center align-items-center">
                  <h3> Phone</h3>
                  <span>+01-3-8888-6868</span>
                </div>
              </div>
              <div className="col  d-flex flex-column align-items-center gap-3 ">
                <a href="">
                  <SlLocationPin />
                </a>
                <div className="text  d-flex flex-column justify-content-center align-items-center">
                  <h3>Address</h3>
                  <span>60-49 Road 11378 New York</span>
                </div>
              </div>
              <div className="col  d-flex flex-column align-items-center gap-3 ">
                <a href="">
                  <IoMdTime />
                </a>
                <div className="  d-flex flex-column justify-content-center align-items-center">
                  <div className="text">
                    <h3>Open Time</h3>
                    <span>10:00 am to 23:00 pm</span>
                  </div>
                </div>
              </div>{" "}
              <div className="col  d-flex flex-column align-items-center gap-3 ">
                <a href="">
                  <TfiEmail />
                </a>
                <div className="text  d-flex flex-column justify-content-center align-items-center">
                  <h3>Email</h3>
                  <span>hello@colorlib.com</span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="row p-0 my-5">
            <div
              className="contact-map   "
              style={{ width: "100vw", height: "100vh" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21832.978865473764!2d76.69963624550724!3d30.72169743357974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8862238c1b%3A0xdd88d9841f97ec13!2s3b2%20spot%20food%20market!5e0!3m2!1sen!2sin!4v1753758097874!5m2!1sen!2sin"
                style={{ width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>{" "}
          </div>

          <div className="contact-message d-flex justify-content-center my-5 ">
            <div className="row justify-content-center align-items-center  gap-5 ">
              <h2 className=" justify-content-center d-flex  fs-1 fw-bold">Leave Message</h2>
              <div class="row flex-row">
                <form className=" ">
                  <div className="row justify-content-center">

                  <div class="col-6 ">
                    <input type="text" placeholder="Your name" className="w-100 border   "/>
                  </div>
                  <div class="col-6 " >
                    <input type="text" placeholder="Your Email" className="w-100 border  "/>
                  </div>
                  </div>
                  <div className="row justify-content-center">

                  <div class="col-12 text-center px-2  my-5 ">
                  <div class="form-floating   w-100vw">
  <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Your Message</label>
</div>
                  </div>
                  </div>
                  <div className="row justify-content-center">

                    <button type="submit" class="site-btn pe-3">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
