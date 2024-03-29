import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHome } from "../Admin/Pages/AdminHome/AdminHome";
import BoysPage from "../Pages/BoysPage";
import { CartPage } from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import GirlsPage from "../Pages/GirlsPage";
import Home from "../Pages/Home";
import { AddressPage } from "../Pages/AddressPage";
import LoginPage from "../Pages/LoginPage";
import MenPage from "../Pages/MenPage";
import SignUpPage from "../Pages/SignUpPage";
import SingleProductPage from "../Pages/SingleProductPage";
import WomenPage from "../Pages/WomenPage";
import { PrivateRoute } from "./PrivateRoute";
import { PaymentPage } from "../Pages/PaymentPage";
import Supplier from "../Pages/Supplier";

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
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route
        path="/supplier"
        element={
          <PrivateRoute>
            <Supplier />
          </PrivateRoute>
        }
      />
      <Route
        path="/productDetails/:gender/:id"
        element={<SingleProductPage />}
      />
      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
