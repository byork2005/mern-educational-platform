import React from "react";
import "./LoginInput.css";

export const LoginBtn = props =>
  <button {...props} className="login-btn btn btn-success center-block">
    {props.children}
  </button>;
