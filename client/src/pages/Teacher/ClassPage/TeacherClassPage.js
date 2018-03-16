import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import GradebookTable from "../../../components/Gradebook";
import Dashboard from "../../../components/Dashboard";
import Assingments from "../../../components/Assingments";
import CreateAssingment from "../../../components/CreateAssingment";
import './style.css';

const Sidebar = ({ matchedPath }) => (
    <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
      <div className="sidebar-nav navbar-collapse collapse">
        <ul className="nav in" id="side-menu">
          <li>
              <Link to={`${matchedPath}/dashboard`}>
                  <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </Link>
            </li>
            <li>
              <Link to={`${matchedPath}/gradebook`}>
                  <i className="fa fa-table fa-fw" /> &nbsp;Grade Book
              </Link>
            </li>
            <li>
                <Link to={`${matchedPath}/assingments`}>
                  <i className="fa fa-folder-o fa-fw" /> &nbsp;Assingments
                </Link>
            </li>
            <li>
                <Link to={`${matchedPath}/create`}>
                  <i className="fa fa-edit fa-fw" /> &nbsp;Create Assingment
                </Link>
            </li>
        </ul>
      </div>
    </div>
 );

 //still need a way to display the actual assingment
const teacherAssingments = () => (
    <Row>
        <Col xs={4} md={4}>
            <h2>Assingment List</h2>
            <hr/>
                {/* <a href="/teacherclass/create"> */}
                    <Button onClick={<Assingments/>}>
                        <h3>World War I Review</h3>
                    </Button>
                {/* </a>          */}
        </Col>
        <Col xs={4} md={4}></Col>
        <Col xs={4} md={4}></Col>
    </Row>
)

class TeacherClassPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isHidden: true
        }
      }

      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
     
    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={2}>
                        <Sidebar matchedPath={this.props.match.url}/> 
                    </Col>
                    <Row>
                        <Col xs={6} md={8}>
                            <Redirect exact from={`${this.props.match.url}`} to={`${this.props.match.url}/dashboard`} />
                            <Route exact path={`${this.props.match.url}/dashboard`} component={Dashboard} />
                            <Route exact path={`${this.props.match.url}/gradebook`} component={GradebookTable} />
                            <Route exact path={`${this.props.match.url}/assingments`} component={teacherAssingments} />
                            <Route exact path={`${this.props.match.url}/wwiassingment`} component={Assingments} />
                            <Route exact path={`${this.props.match.url}/create`} component={CreateAssingment} />
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