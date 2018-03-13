import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";

const Success = () => {
    return (
        <Jumbotron className="success">
            <h2>You have Successfully Signed Up!</h2>
            <h3>Please click Login to continue.</h3>
        </Jumbotron>
    )
}

export default Success;