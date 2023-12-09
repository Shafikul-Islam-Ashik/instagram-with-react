import { BiLogoFacebookSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Signup.scss";
import Footer from "../../footer/Footer";
import Insta from "../insta/Insta";
import Card from "../card/Card";
import { useState } from "react";
import {
  createToast,
  isValidEmail,
  isValidMobile,
} from "../../helpers/helpers";

const Signup = () => {
  const [input, setInput] = useState({
    moe: "",
    fullname: "",
    username: "",
    password: "",
  });

  // handle input
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleSignup
  const handleSignup = (e) => {
    e.preventDefault();

    if (!input.fullname || !input.moe || !input.username || !input.password) {
      createToast("All fields are required");
    } else if (!isValidEmail(input.moe) && !isValidMobile(input.moe)) {
      createToast("Invalid email address or mobile");
    } else {
      createToast("Data stable", "success");
    }
  };

  return (
    <>
      <Insta title="Instagram sign up" />

      <div className="signup-form">
        <Card>
          <div className="signup-area">
            <div className="logo">
              <img
                src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png"
                alt=""
              />
            </div>

            <h2>Sign up to see photos and videos from your friends.</h2>

            {/* login with fb btn */}
            <Link to="" className="login-with-fb-btn">
              <BiLogoFacebookSquare />
              Log in with Facebook
            </Link>

            <div className="devider">OR</div>

            {/* signup form */}
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Mobile number or email address"
                name="moe"
                value={input.moe}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={input.fullname}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={input.username}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleInput}
              />

              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
                <Link to="">Learn more</Link>
              </p>
              <p>
                By signing up, you agree to our
                <Link to="">Terms, Privacy Policy and Cookies Policy.</Link>
              </p>

              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </form>
          </div>
        </Card>
        <div className="login-area">
          <Card>
            <p>
              Have an account? <Link to="/">Log in</Link>
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

      {/* footer here */}
      <Footer />
    </>
  );
};

export default Signup;
