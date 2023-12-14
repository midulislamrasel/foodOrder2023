import React from "react";
import { FaCartPlus, FaHeadphones, FaUtensils, FaUser } from "react-icons/fa";

export default function page() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Our Services
          </h5>
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className=" text-primary mb-4 fs-1">
                  <FaUser />
                </i>
                <h5>Master Chefs</h5>
                <p>
                  Master chefs are culinary virtuosos, crafting exquisite dishes
                  with precision and creativity, elevating food to an art form.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className=" text-primary mb-4 fs-1">
                  <FaUtensils />
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
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className=" text-primary mb-4 fs-1">
                  <FaCartPlus />
                </i>
                <h5>Online Order</h5>
                <p>
                  Online orders provide convenient,hassle-free shopping.With a
                  few clicks, customers access a vast selection and doorstep
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className=" text-primary mb-4 fs-1">
                  <FaHeadphones />
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
  );
}
