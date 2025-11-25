import "./App.css";

import Navbar from "./components/nav-bar/Navbar";
import Profile from "./pages/profile/Profile.jsx";
import Signin from "./pages/sign-in/Signin.jsx";
import Signup from "./pages/sign-up/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";

import { Route, Routes } from "react-router-dom";

import Ref from "./components/use-ref/Ref.jsx";     
import DomRef from "./components/use-ref/DomRef.jsx";  

import ProductDetails from "./pages/product-details/Product-Details.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Ref />
      <DomRef />

      {/* Uncomment if you want routing */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;
