import React, { Children } from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from './navbar'

const DashboardLayout = ({ children }) => {
  return (
    <>
    <div className="flex h-[100vh]">
      <Sidebar></Sidebar>
      <div className="flex flex-col h-[100vh] w-[100vw] justify-between">
        <Navbar/>
        <main className="py-3 w-full flex justify-center items-center">{children}</main>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
