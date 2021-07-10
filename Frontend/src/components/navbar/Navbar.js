import React from "react";
import AuthNav from "../loginPage/AuthNav";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between" style={{paddingLeft: "15px"}}>
        <div className="navbar-brand logo "> 
            <i className="fab fa-creative-commons"></i> ChatCord
        </div>
        <AuthNav />
      </nav>
    </div>
  );
};

export default Navbar;