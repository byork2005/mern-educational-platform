import React from "react";
import "./LoginInput.css";

export const LoginInput = props =>
  <div className="login-input form-group">
    <input className="form-control" {...props} />
  </div>;
