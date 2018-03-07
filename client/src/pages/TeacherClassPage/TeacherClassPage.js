import React, {Component} from "react";
import {Row, Col} from 'react-bootstrap';
import GradebookTable from "../../components/Gradebook";
import Dashboard from "../../components/Dashboard"
import './style.css';

class TeacherClassPage extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true,
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      toggleHiddenDashboard () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={2}>
                        <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
                            <div className="sidebar-nav navbar-collapse collapse">
                            <ul className="nav in" id="side-menu">
                                <li>
                                <a href="" onClick={this.toggleHiddenDashboard.bind(this)}>
                                    <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
                                </a>
                                </li>
                                <li>
                                <a href="" onClick={this.toggleHidden.bind(this)}>
                                    <i className="fa fa-table fa-fw" /> &nbsp;Grade Book
                                </a>
                                </li>
                                <li>
                                <a href=""  >
                                    <i className="fa fa-folder-o fa-fw" /> &nbsp;Assingments
                                </a>
                                </li>
                                <li>
                                <a href=""  >
                                    <i className="fa fa-edit fa-fw" /> &nbsp;Create Assingment
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </Col>
                    <Row>
                        <Col xs={6} md={8}>
                            <Dashboard />
                            {!this.state.isHidden && <GradebookTable />}
                        </Col>
                        <Col xs={6} md={4}>
                        
                        </Col>
                    </Row>
                </Row>
            </div>
        )
    }

}

export default TeacherClassPage;