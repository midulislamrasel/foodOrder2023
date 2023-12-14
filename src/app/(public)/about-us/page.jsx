import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  about_1,
  about_2,
  about_3,
  about_4,
  midul,
  rayhan,
  samad,
  siam,
  team_1,
  team_2,
  team_3,
  team_4,
  yasin,
} from "../../../../public/img/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <Image
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    // src="img/about-1.jpg"
                    src={about_1}
                    alt=""
                  />
                </div>
                <div className="col-6 text-start">
                  <Image
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    // src="img/about-2.jpg"
                    src={about_2}
                    style={{ marginTop: "25%" }}
                    alt=""
                  />
                </div>
                <div className="col-6 text-end">
                  <Image
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    // src="img/about-3.jpg"
                    src={about_3}
                    alt=""
                  />
                </div>
                <div className="col-6 text-end">
                  <Image
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    // src="img/about-4.jpg"
                    src={about_4}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                BUBT-SDP
              </h1>
              <p className="mb-4">
                Welcome to our restaurant! Enjoy a streamlined dining experience
                with our efficient 50-food order service.
              </p>
              <p className="mb-4">
                Explore a variety of flavors and effortlessly place your order
                for a delightful meal.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image className="img-fluid" src={rayhan} alt="" />
                </div>
                <h5 className="mb-0">Kazi Rayhan</h5>
                <small>Chief cook</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image
                    className="img-fluid"
                    //   src="img/team-2.jpg"
                    src={midul}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Md Midul Islam</h5>
                <small>second cook</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image
                    className="img-fluid"
                    //   src="img/team-3.jpg"
                    src={samad}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Samad Hossain</h5>
                <small>second cook</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image
                    className="img-fluid"
                    //    src="img/team-4.jpg"
                    src={yasin}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Yasin Hossain</h5>
                <small>chief chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image
                    className="img-fluid"
                    //    src="img/team-4.jpg"
                    src={siam}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Md Siam Hossain</h5>
                <small>chief chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
