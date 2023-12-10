import FoodCard from "@/components/FoodCard/FoodCard";
import React from "react";

export default function page() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
              >
                <i className="fa fa-coffee fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Popular</small>
                  <h6 className="mt-n1 mb-0">Breakfast</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
              >
                <i className="fa fa-hamburger fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Special</small>
                  <h6 className="mt-n1 mb-0">Launch</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
              >
                <i className="fa fa-utensils fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Lovely</small>
                  <h6 className="mt-n1 mb-0">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
