import React from "react";
import bike from "./images/logo-bike.png";
import "./css/Nav.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand bike-logo" href="/">
            <img src={bike} alt="" className="img-fluid logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">
                  OUR TEAM
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link to="/inventory" className="nav-link">
                      MANAGE ITEMS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/myItem" className="nav-link">
                      MY ITEMS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/addItem" className="nav-link">
                      ADD ITEM
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link"
                      onClick={() => signOut(auth)}
                    >
                      LOGOUT
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      LOGIN
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="text-right text-white">
              {user?.displayName && "welcome " + user.displayName}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
