import Signup from "../component/signup/Signup";
import Auth from "../pages/auth/Auth";
// import Home from "../pages/home/Home";

// create private router
const publicRouter = [
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

// export
export default publicRouter;
