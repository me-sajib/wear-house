import React, { useEffect } from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../Spinner";
import "./css/SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  // get the location from react-router-dom
  // navigate to the page
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // navigate to the page from where user came
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="text-light pt-5">
      <div className="container">
        {/* or text top of the social button */}
        <div className="d-flex">
          <div className="hr-row mt-3"></div>
          <div className="mx-2">or</div>
          <div className="hr-row mt-3"></div>
        </div>

        {/* social button */}
        <div className="d-flex py-5 justify-content-center">
          {
            // if loading show spinner
            loading || loadingGithub ? <Spinner /> : ""
          }
          <div className="mx-2">
            <button
              className="btn btn-primary"
              onClick={() => signInWithGoogle()}
            >
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
          <div className="mx-2">
            <button className="btn btn-info" onClick={() => signInWithGithub()}>
              <i className="fa-brands fa-github"></i>
            </button>
          </div>
          <div className="mx-2">
            <button className="btn btn-success">
              <i className="fa-brands fa-facebook-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
