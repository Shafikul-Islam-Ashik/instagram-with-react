import "./Auth.scss";
import Insta from "../../component/insta/Insta";
import img from "../../assets/insta_auth_img.png";
import { Link } from "react-router-dom";
import Card from "../../component/card/Card";

import { BiLogoFacebookSquare } from "react-icons/bi";
import Footer from "../../footer/Footer";
import { useState } from "react";
import {
  createToast,
  isValidEmail,
  isValidMobile,
} from "../../helpers/helpers";

const Auth = () => {
  const [input, setInput] = useState({
    moe: "",
    password: "",
  });

  // handle input
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle loginform
  const handleLoginForm = (e) => {
    e.preventDefault();

    if (!input.moe || !input.password) {
      createToast("All fields are required");
      return;
    }
    if (!isValidEmail(input.moe) && !isValidMobile(input.moe)) {
      createToast("Invalid email address or mobile");
      return;
    } else {
      createToast("Data stable", "success");
    }
  };

  return (
    <>
      <Insta title="Instagram" />

      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="right">
            {/* login form here */}

            <div className="login-form">
              <Card>
                <div className="login-area">
                  <div className="logo">
                    <img
                      src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png"
                      alt=""
                    />
                  </div>

                  <form onSubmit={handleLoginForm}>
                    <input
                      type="text"
                      placeholder="Phone number, username, email address"
                      name="moe"
                      value={input.moe}
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={input.password}
                      onChange={handleInput}
                    />
                    <button type="submit" className="login-btn">
                      Log in
                    </button>
                  </form>

                  <div className="devider">OR</div>

                  <div className="login-with-fb">
                    <Link to="">
                      <BiLogoFacebookSquare />
                      <span>Log in with Facebook</span>
                    </Link>
                  </div>
                  <div className="forgot-password">
                    <Link to="">Forgotten your password?</Link>
                  </div>
                </div>
              </Card>
              <div className="signup-area">
                <Card>
                  <p>
                    Dont have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </Card>
              </div>
              <div className="get-app-area">
                <p>Get the app.</p>
                <div className="app-img">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                    alt=""
                    height="41px"
                    width="135px"
                  />
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                    alt=""
                    height="41px"
                    width="113px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Auth;
