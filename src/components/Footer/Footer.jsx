import React from "react";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import { BiSolidMapPin } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <Link className="btn btn-link" href="">
                About Us
              </Link>
              <Link className="btn btn-link" href="">
                Contact Us
              </Link>
              <a className="btn btn-link" href="">
                Reservation
              </a>
              <Link className="btn btn-link" href="/privacy-policy">
                Privacy Policy
              </Link>
              <a className="btn btn-link" href="/terms-and-condition">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fs-4 me-3">
                  <BiSolidMapPin />
                </i>
                Bangladesh, Dhaka-1210
              </p>
              <p className="mb-2">
                <i className="fs-5 me-3">
                  <FaPhoneAlt />
                </i>
                +88017584692
              </p>
              <p className="mb-2">
                <i className="fs-4 me-3">
                  <FaRegEnvelope />
                </i>
                foodorder@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fs-4 mb-1">
                    <FaTwitter />
                  </i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fs-3 mb-1">
                    <RiFacebookFill />
                  </i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fs-3 mb-1">
                    <FaYoutube />
                  </i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fs-4 mb-1">
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Friday</h5>
              <p>10AM - 11PM</p>
              <h5 className="text-light fw-normal">Saturday to Tursday</h5>
              <p>9AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  food
                </a>
                , All Right Reserved. Designed By {"foodOrder "}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Back to Top --> */}
      <button className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <FaArrowUp />
      </button>
    </>
  );
}
