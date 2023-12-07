import Card from "../../component/card/Card";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Signup.scss";
import Footer from "../../footer/Footer";
import Insta from "../insta/Insta";

const Signup = () => {
  return (
    <>
      <Insta title="Instagram sign up" />

      <div className="signup-form">
        <Card>
          <div className="login-area">
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
            <form action="">
              <input type="text" placeholder="Mobile number or email address" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
                <Link to="">Learn more</Link>
              </p>
              <p>
                By signing up, you agree to our
                <Link to="">Terms, Privacy Policy and Cookies Policy.</Link>
              </p>

              <button className="login-btn">Sign up</button>
            </form>
          </div>
        </Card>
        <div className="signup-area">
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
