import FoodCard from "@/components/FoodCard/FoodCard";
import React from "react";

export default function page() {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 class="mb-5">Most Popular Items</h1>
        </div>
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
              >
                <i class="fa fa-coffee fa-2x text-primary"></i>
                <div class="ps-3">
                  <small class="text-body">Popular</small>
                  <h6 class="mt-n1 mb-0">Breakfast</h6>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
              >
                <i class="fa fa-hamburger fa-2x text-primary"></i>
                <div class="ps-3">
                  <small class="text-body">Special</small>
                  <h6 class="mt-n1 mb-0">Launch</h6>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
              >
                <i class="fa fa-utensils fa-2x text-primary"></i>
                <div class="ps-3">
                  <small class="text-body">Lovely</small>
                  <h6 class="mt-n1 mb-0">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4">
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
