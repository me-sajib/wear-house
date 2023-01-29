import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-dark light-border py-5">
      <div className="container text-danger">
        <div className="text-center">
          <h1>Sorry, We can't find the page you're looking</h1>
          <h1 className="404 py-5" style={{ fontSize: "79px" }}>
            404
          </h1>
          <h3>Ohh No!! Looks like the page you wanted has gone for a ride.</h3>
          <h3>
            Drive your way to other pages on WEAR HOUSE by clicking above
            navigation link or click to
          </h3>
          <Link to="/" className="btn btn-danger mt-4">
            {" "}
            Go To Home Page{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
