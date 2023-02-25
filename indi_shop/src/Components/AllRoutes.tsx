import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHome } from "../Admin/Pages/AdminHome/AdminHome";
import BoysPage from "../Pages/BoysPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import GirlsPage from "../Pages/GirlsPage";
import Home from "../Pages/Home";

import LoginPage  from "../Pages/LoginPage";
import MenPage from "../Pages/MenPage";
import SignUpPage from "../Pages/SignUpPage";
import SingleProductPage from "../Pages/SingleProductPage";
import WomenPage from "../Pages/WomenPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/menPage" element={<MenPage />} />
      <Route path="/womenPage" element={<WomenPage />} />
      <Route path="/boysPage" element={<BoysPage />} />
      <Route path="/girlsPage" element={<GirlsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route
        path="/productDetails/:gender/:id"
        element={<SingleProductPage />}
      />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/admin/*" element={<AdminHome />} />
    </Routes>
  );
};

export default AllRoutes;
