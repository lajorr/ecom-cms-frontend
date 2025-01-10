import { Navigate, Route, Routes } from "react-router-dom";

// components

import FooterAdmin from "components/Footers/FooterAdmin.js";
import HeaderStats from "components/Headers/HeaderStats";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// views

import Brand from "views/admin/Brand";
import Category from "views/admin/Category";
import Dashboard from "views/admin/Dashboard";
import Maps from "views/admin/Maps.js";
import Product from "views/admin/Product";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes >
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/brands" element={<Brand />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/products" element={<Product />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
