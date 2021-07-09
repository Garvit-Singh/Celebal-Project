import React from "react";
import AuthNav from "../loginPage/AuthNav";

const Navbar = () => {
  return (
    <div className="nav-container mb-3 ">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
        <div className="navbar-brand logo m-2"> 
            {/* logo */}
            ChatCord
        </div>
        <AuthNav />
      </nav>
    </div>
  );
};

export default Navbar;