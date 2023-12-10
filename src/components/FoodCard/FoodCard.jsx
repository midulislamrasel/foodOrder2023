import React from "react";

export default function FoodCard() {
  return (
    <div class="col-lg-6">
      <div class="d-flex align-items-center">
        <img
          class="flex-shrink-0 img-fluid rounded"
          src="img/menu-1.jpg"
          alt=""
          style={{ width: "80px" }}
        />
        <div class="w-100 d-flex flex-column text-start ps-4">
          <h5 class="d-flex justify-content-between border-bottom pb-2">
            <span>Chicken Burger</span>
            <span class="text-primary">$115</span>
          </h5>
          <div>
          <small class="fst-italic">
            Ipsum ipsum clita erat amet dolor justo diam
          </small>
          </div>
        </div>
      </div>
    </div>
  );
}
