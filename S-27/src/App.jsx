import "./App.css";
import { lazy } from "react";

// import Profile from "./pages/profile/Profile.jsx";
// import Signin from "./pages/sign-in/Signin.jsx";
// import Signup from "./pages/sign-up/Signup.jsx";

//Eager Loading : slow downs application
import Products from "./pages/products/Products.jsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details/Product-Details.jsx";
import Cart from "./pages/cart/Cart.jsx";

//Lazy Loading
const Navbar = lazy(() => {
  return import("./components/nav-bar/Navbar.jsx");
});

const Home = lazy(() => {
  return import("./pages/home/Home.jsx");
});

const Profile = lazy(() => {
  return import("./pages/profile/Profile.jsx");
});

const Signin = lazy(() => {
  return import("./pages/sign-in/Signin.jsx");
});

const Signup = lazy(() => {
  return import("./pages/sign-up/Signup.jsx");
});

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <UseReducerComp />
      <Ref />
      <DomRef /> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/productdetails"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;