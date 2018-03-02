import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Login = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Log in here</h1>
          <Input
                // value={this.state.username}
                // onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
                        <Input
                // value={this.state.username}
                // onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default Login;
