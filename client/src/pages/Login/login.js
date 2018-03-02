import React from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { LoginInput, LoginBtn } from "../../components/LoginStuff";
import "./login.css";


const Login = () =>
<div class="container">
  <div class="row">
    <div class="Absolute-Center is-Responsive">
      <div id="logo-container"></div>
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <form action="" id="loginForm">
          <div class="form-group input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input class="form-control" type="text" name='username' placeholder="username"/>          
          </div>
          <div class="form-group input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input class="form-control" type="password" name='password' placeholder="password"/>     
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"/> I agree to the <a href="asdasd">Terms and Conditions</a>
            </label>
          </div>
          <div class="form-group">
            <a href="/studenthome"><button type="button" class="btn btn-def btn-block">Login</button></a>
          </div>
          <div class="form-group text-center">
            <a href="asdasd">Forgot Password</a>&nbsp;|&nbsp;<a href="/teacherhome">Support</a>
          </div>
        </form>        
      </div>  
    </div>    
  </div>
</div>

export default Login;
