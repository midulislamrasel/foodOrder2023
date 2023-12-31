import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCartPlus,
  FaHeadphones,
  FaUtensils,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {
  about_1,
  about_2,
  about_3,
  about_4,
  hero_Image,
  menu_1,
  menu_2,
  menu_3,
  menu_4,
  menu_5,
  menu_6,
  menu_7,
  menu_8,
  midul,
  rayhan,
  samad,
  siam,
  team_1,
  team_2,
  team_3,
  team_4,
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4,
  yasin,
} from "../../../public/img/image";

export default function page() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">
                  Enjoy Our
                  <br />
                  Delicious Meal
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  Offering a diverse menu and swift service that turns every
                  meal into a culinary delight. Order now for delicious food!"
                </p>
                <Link
                  href="/book-a-table"
                  className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Book A Table
                </Link>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <Image className="img-fluid" src={hero_Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar & Hero End --> */}
      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className=" text-primary mb-4 fs-1">
                    <FaCartPlus />
                  </i>
                  <h5>Master Chefs</h5>
                  <p>
                    Master chefs are culinary virtuosos, crafting exquisite
                    dishes with precision and creativity, elevating food to an
                    art form.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className=" text-primary mb-4 fs-1">
                    <FaHeadphones />
                  </i>
                  <h5>Quality Food</h5>
                  <p>
                    Quality food is a harmonious blend of fresh, premium
                    ingredients, expertly prepared to delight the palate and
                    nourish the body.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className=" text-primary mb-4 fs-1">
                    <FaUtensils />
                  </i>
                  <h5>Online Order</h5>
                  <p>
                    Online orders provide convenient,hassle-free shopping.With a
                    few clicks, customers access a vast selection and doorstep
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className=" text-primary mb-4 fs-1">
                    <FaUser />
                  </i>
                  <h5>24/7 Service</h5>
                  <p>
                    24/7 service ensures continuous support and assistance,
                    meeting customer needs around the clock with unwavering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
      {/* <!-- About Start --> */}
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
      {/* <!-- Menu Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-className text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-1.jpg"
                        src={menu_1}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-2.jpg"
                        src={menu_2}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-3.jpg"
                        src={menu_3}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-4.jpg"
                        src={menu_4}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-5.jpg"
                        src={menu_5}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-6.jpg"
                        src={menu_6}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-7.jpg"
                        src={menu_7}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-8.jpg"
                        src={menu_8}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-1.jpg"
                        src={menu_1}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-2.jpg"
                        src={menu_2}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-3.jpg"
                        src={menu_3}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-4.jpg"
                        src={menu_4}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-5.jpg"
                        src={menu_5}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$515</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-6.jpg"
                        src={menu_6}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$515</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-7.jpg"
                        src={menu_7}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-8.jpg"
                        src={menu_8}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-1.jpg"
                        src={menu_1}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-2.jpg"
                        src={menu_2}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-3.jpg"
                        src={menu_3}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-4.jpg"
                        src={menu_4}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-5.jpg"
                        src={menu_5}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-6.jpg"
                        src={menu_6}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-7.jpg"
                        src={menu_7}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <Image
                        className="flex-shrink-0 img-fluid rounded"
                        // src="img/menu-8.jpg"
                        src={menu_8}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Menu End --> */}
      {/* <!-- Reservation Start --> */}
      <div
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                Reservation
              </h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label for="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select" id="select1">
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                      </select>
                      <label for="select1">No Of People</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation Start --> */}
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
                  <Link
                    className="btn btn-square btn-primary mx-1"
                    href="https://github.com/midulislamrasel"
                  >
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
              className="col-lg-4 col-md-6 wow fadeInUp"
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
              className="col-lg-4 col-md-6 wow fadeInUp"
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

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
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
          </div>
        </div>
      </div>

      {/* <!-- Team End --> */}
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Seamless transactions, timely deliveries—this food ordering
                system exceeded our expectations. A must for busy individuals
                seeking convenience.
              </p>
              <div className="d-flex align-items-center">
                <Image
                  className="img-fluid flex-shrink-0 rounded-circle"
                  // src="img/testimonial-1.jpg"
                  src={testimonial_1}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h5 className="mb-1">Sadiya Akther</h5>
                  <small>clients</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                ncredible variety, simple interface—our customers love the menu
                options and we appreciate the smooth order management. Top-notch
                service
              </p>
              <div className="d-flex align-items-center">
                <Image
                  className="img-fluid flex-shrink-0 rounded-circle"
                  // src="img/testimonial-2.jpg"
                  src={testimonial_2}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h5 className="mb-1">Rakib </h5>
                  <small>clients</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Boosted our sales, minimized errors—this system is a
                game-changer. Efficient, reliable, and loved by both our team
                and customers
              </p>
              <div className="d-flex align-items-center">
                <Image
                  className="img-fluid flex-shrink-0 rounded-circle"
                  // src="img/testimonial-3.jpg"
                  src={testimonial_3}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h5 className="mb-1">Rohan Ahammed</h5>
                  <small>clients</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                From order to delivery, flawless execution—this food ordering
                system has significantly improved our service. A reliable choice
                for any restaurant!
              </p>
              <div className="d-flex align-items-center">
                <Image
                  className="img-fluid flex-shrink-0 rounded-circle"
                  // src="img/testimonial-4.jpg"
                  src={testimonial_4}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className="ps-3">
                  <h5 className="mb-1">Piyasha</h5>
                  <small>clients</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
}
