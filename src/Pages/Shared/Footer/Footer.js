import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark light-border text-white py-5">
      <div className="container">
        <div className="row row-cols-1 my-5 row-cols-md-5 g-3">
          <div className="col">
            <h1 className="text-bold">BIKE HOUSE</h1>
            <p>we are trying to possibilities for the connected world.</p>
            <b>Be Positive</b>
          </div>
          <div className="col">
            <div className="mb-3">
              <b>Explore</b>
            </div>
            <div className=" footer-styled text-gray">
              <p>Home</p>
              <p>About</p>
              <p>Capabilities</p>
              <p>Career</p>
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <b>
                Visit <i className="fa-solid text-white fa-map-marker-alt"></i>
              </b>
            </div>
            <address>
              <div className="footer-styled text-gray">
                <p>Jigatola, Dhanmondi. </p>
                <p>24/9 Songkar </p>
                <p>Uttor city, Dhaka 1207 </p>
              </div>

              <div className="mt-4">
                <b>New Business</b>
              </div>
              <div className=" footer-styled">
                <div className="py-2 d-flex align-items-center gap-2 text-gray">
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <p> bike@dhakahouse.com</p>
                </div>

                <div className="d-flex align-items center gap-2">
                  <i className="fa-solid fa-phone"></i> <p>+8801721112222</p>
                </div>
              </div>
            </address>
          </div>

          <div className="col">
            <div>
              <b>Follow</b>
            </div>
            <div className="list-unstyled footer-styled text-gray">
              <div className="pt-3">
                {/* instagram icon */}
                <i className="fa-brands fa-instagram"></i> Instagram
              </div>
              <div className="pt-3">
                {/* facebook icon */}
                <i className="fa-brands fa-facebook"></i> Facebook
              </div>
              <div className="pt-3">
                {/* twitter icon */}
                <i className="fa-brands fa-twitter"></i> Twitter
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <b>Legal</b>
            </div>
            <div className="list-unstyled footer-styled text-gray">
              <div className="d-flex gap-2 align-items-center mt-3">
                <i className="fa-solid text-white fa-file-alt"></i> Privacy
                Policy
              </div>
              <div className="d-flex gap-2 align-items-center py-3">
                <i className="fa-solid text-white fa-file-alt"></i> Terms of Use
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-solid text-white fa-cookie"></i>
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <small> &copy; 2022 bike wear house. All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
