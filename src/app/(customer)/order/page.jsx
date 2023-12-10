import React from "react";
import OrderCard from "./orderCard";

export default function page() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 border-bottom">
          <h5>Recent orders:</h5>
          <OrderCard />
        </div>
        <div className="col-md-8">
          <h5>Past orders:</h5>
        </div>
      </div>
    </div>
  );
}
