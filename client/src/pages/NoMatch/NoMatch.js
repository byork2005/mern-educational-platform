import React from "react";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import "./NoMatch.css";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h1 class="text-center">404 Page Not Found</h1>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
