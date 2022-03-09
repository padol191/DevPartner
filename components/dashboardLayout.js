import React, { Children } from "react";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
      <main className="py-3">{children}</main>
    </div>
  );
};

export default DashboardLayout;
