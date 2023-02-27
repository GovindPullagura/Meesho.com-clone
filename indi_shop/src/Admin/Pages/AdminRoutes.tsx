import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AddProduct } from "./Add Product/AddProduct";
import { Dashboard } from "./Dashboard/Dashboard";
import { Orders } from "./Orders/Orders";
import { Products } from "./Products/Products";
import { Users } from "./Users/Users";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Outlet />
    </>
  );
};
