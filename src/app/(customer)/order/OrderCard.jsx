import Image from "next/image";
import React from "react";

export default function OrderCard() {
  return (
    <div className="col-lg-8 bg-white">
      <div className="d-flex align-items-center px-3 py-2">
        <Image
          className="flex-shrink-0 img-fluid rounded"
          src="img/menu-1.jpg"
          alt=""
          style={{ width: "80px" }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>Chicken Burger</span>
            <span className="text-primary">$115</span>
          </h5>
          <div>
            <p>
              Status: <span>pending</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
