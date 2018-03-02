import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import "./studentHome.css";

const studentContainer = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
<ul>
  <li>Psychology<DeleteBtn/></li>
  <li>History<DeleteBtn/></li>
</ul>
      </Col>
    </Row>
  </Container>;

export default studentContainer;
