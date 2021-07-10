import React from "react";
import AuthenticationButton from "./AuthenticationButton";
import SignupButton from "./SignUpButton";

const AuthNav = () => (
  <div className="navbar-nav right">
    <SignupButton />
    <AuthenticationButton />
  </div>
);

export default AuthNav;
