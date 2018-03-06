import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap';
import GradebookTable from "../../components/Gradebook";

class TeacherClassPage extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={4}>
                        <GradebookTable/>
                    </Col>
                    <Col xs={6} md={4}>
                        
                    </Col>
                    <Col xs={6} md={4}>
                    
                    </Col>
                </Row>
            </div>
        )
    }

}

export default TeacherClassPage;