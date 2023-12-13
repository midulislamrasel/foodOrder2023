import React from "react";

function SingeUp() {
  return (
    <div className="container-fluid  ">
      {" "}
      <div
        className="container-xxl py-5 px-0 wow fadeInUp aline-center"
        data-wow-delay="0.1s"
      >
        <div className="row g-0 d-flex justify-content-center ">
          <div className="col-md-6 bg-dark d-flex align-items-center ">
            <div
              className="p-5 wow fadeInUp bg-dark rounded"
              data-wow-delay="0.2s"
            >
              <h1 className="text-white mb-4 text-center">SING UP</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="First Name"
                      />
                      <label for="name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Last Name"
                      />
                      <label for="name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="name"
                        placeholder="email"
                      />
                      <label for="name">Enter your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                      <label for="email">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                      <label for="email">confirm Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      SING UP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingeUp;
