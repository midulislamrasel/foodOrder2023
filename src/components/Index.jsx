import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { midul, rayhan, samad, siam, yasin } from "../../public/img/image";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaHeadphones,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
            <div className="row g-4"></div>
            <Slider {...settings}>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <Image
                      className="img-fluid"
                      //  src="img/team-1.jpg"
                      src={rayhan}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0">Kazi Rayhan</h5>
                  <small>Chief cook </small>
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
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <Image
                      className="img-fluid"
                      //  src="img/team-2.jpg"
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
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <Image
                      className="img-fluid"
                      //  src="img/team-3.jpg"
                      src={samad}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0">Samad Hossain</h5>
                  <small>second cook</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <FaHeadphones />
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
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <Image
                      className="img-fluid"
                      // src="img/team-4.jpg"
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

              {/* Siam */}
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <Image
                      className="img-fluid"
                      // src="img/team-4.jpg"
                      src={siam}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0">Md Siam Hossain</h5>
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
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
