import React from "react";
import "./css/TopSeller.css";

const TopSeller = () => {
  return (
    <div className="bg-dark text-center py-5 text-white">
      <div className="container">
        <h1>TOP SELLER</h1>

        <div className="row row-cols-1 row-cols-md-4 mt-5 py-2">
          {/* first seller */}
          <div className="col mt-5">
            <div className="seller-container">
              <div className="seller-image position-relative">
                {/* bootstrap badge */}
                <span className="badge bg-primary rounded-pill position-absolute">
                  {" "}
                  1
                </span>
                <img
                  style={{ height: "80px", width: "80px" }}
                  className="img-fluid rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrgS7qk_caOz50dMWjmxrF5TqU-GyMSPsoNKguPW92g&s"
                  alt="seller"
                />
              </div>
              <div className="seller-name">
                <h3>Jack Dyan</h3>
              </div>
              <div className="seller-rating">
                <small>$12,32,22,1</small>
              </div>
            </div>
          </div>

          {/* second seller */}
          <div className="col mt-5">
            <div className="seller-container">
              <div className="seller-image position-relative">
                {/* bootstrap badge */}
                <span className="badge bg-primary rounded-pill position-absolute">
                  {" "}
                  2
                </span>
                <img
                  style={{ height: "80px", width: "80px" }}
                  className="img-fluid rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRphD0CRvp7UYWEHw7gawIc8K1aQnSGRZlw&usqp=CAU"
                  alt="seller"
                />
              </div>
              <div className="seller-name">
                <h4>Mackey Iyn</h4>
              </div>
              <div className="seller-rating">
                <small>$12,12,52,1</small>
              </div>
            </div>
          </div>

          {/* third seller */}
          <div className="col mt-5">
            <div className="seller-container">
              <div className="seller-image position-relative">
                {/* bootstrap badge */}
                <span className="badge bg-primary rounded-pill position-absolute">
                  {" "}
                  3
                </span>
                <img
                  style={{ height: "80px", width: "80px" }}
                  className="img-fluid rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nkWmAI1Hu3FmrIzdcE9tWK2s8HJhU9Iz0_PgSwSnrQ&s"
                  alt="seller"
                />
              </div>
              <div className="seller-name">
                <h4>Doling Eyar</h4>
              </div>
              <div className="seller-rating">
                <small>$11,12,02,3</small>
              </div>
            </div>
          </div>

          {/* fourth seller */}

          <div className="col mt-5">
            <div className="seller-container">
              <div className="seller-image position-relative">
                {/* bootstrap badge */}
                <span className="badge bg-primary rounded-pill position-absolute">
                  {" "}
                  4
                </span>
                <img
                  style={{ height: "80px", width: "80px" }}
                  className="img-fluid rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7wSPWEDUsWYJlDrs0qiJYv88nCKPnSZJM6hfxeT51w&s"
                  alt="seller"
                />
              </div>
              <div className="seller-name">
                <h4>Tinner Yame</h4>
              </div>
              <div className="seller-rating">
                <small>$8,2,02,1</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
