import React from "react";
import "./css/ServiceDetails.css";
import CountUp from "react-countup";

const ServiceDetails = () => {
  return (
    <div className="bike-rating ">
      <div className="bg-text">
        <div className="container text-white">
          <div className="row row-cols-1 my-5 row-cols-md-3 g-3">
            <div className="col">
              <div className="">
                <h1>
                  <i className="fa-solid fa-user"></i>
                </h1>
                <CountUp start={0} end={30} delay={0}>
                  {({ countUpRef }) => (
                    <h1>
                      <span ref={countUpRef} />+
                    </h1>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="col">
              <div className="">
                <h1>
                  <i className="fa-solid fa-users"></i>
                </h1>
                <CountUp start={0} end={9000} delay={0}>
                  {({ countUpRef }) => (
                    <h1>
                      <span ref={countUpRef} />+
                    </h1>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="col">
              <div className="">
                <h1>
                  <i className="fa-solid fa-motorcycle"></i>
                </h1>
                <CountUp start={0} end={400} delay={0}>
                  {({ countUpRef }) => (
                    <h1>
                      <span ref={countUpRef} />
                    </h1>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
