import React from "react";

export default function page() {
  return (
    <div className="container">
      <div className="col-md-12 d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            Account info
          </h5>
          <div className="mx-auto">
            <h6 className="mt-5">My profile</h6>
            <form className="mt-5">
              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                    <label for="name">First name</label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                    <label for="name">Last name</label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Your Name"
                    />
                    <label for="name">Mobile</label>
                  </div>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
            <div>
              {/* email */}

              <div className="col-md-8 mt-5">
                <h6>Email</h6>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="text@gmail.com"
                    disabled
                  />
                  <label for="name">Email</label>
                </div>
              </div>
            </div>
            <form className="mt-5">
              <div className="row g-3">
                <div className="col-8">
                  <h6>Address</h6>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="13 number road rupnagar mirpur-2"
                      id="message"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="message">Your curr address</label>
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
