import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { LoginInput, LoginBtn } from "../../components/LoginStuff";
import "./login.css";


const Login = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">

          <h1 className = "text-center">Log in here</h1>
          <LoginInput
                // value={this.state.username}
                // onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
                        <LoginInput
                // value={this.state.username}
                // onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <LoginBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              >
                Login
              </LoginBtn>
      </Col>
    </Row>
  </Container>;

export default Login;
