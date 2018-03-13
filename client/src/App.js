import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import {Row, Col, Well, Button} from 'react-bootstrap';
import TopNav from "./components/TopNav";
import TeacherClassPage from "./pages/Teacher/ClassPage";
import TeacherHomePage from "./pages/Teacher/HomePage";
import StudentClassPage from "./pages/Student/ClassPage";
import StudentHomePage from "./pages/Student/HomePage";
import Signup from "./pages/Login/sign-up.js";
import Login from "./pages/Login/login.js";
import LandingPage from "./pages/Login/landing.js";

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

//Experimental Component to get to the /welcome page, ignore for now
// const Welcome = () => (
//   <Well>
//       <Row>
//           <h1>Welcome</h1>
//       </Row>
//       <Row>
//           <Col xs={4} md={6}></Col>
//           <Col xs={4} md={6}>
//                   <Link to={`/welcome`}>
//                       <Button bsStyle="primary">Enter</Button> 
//                   </Link>
//           </Col>
//           <Col xs={4} md={6}></Col>
//       </Row>
//   </Well>
// )

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      name: null,
      role: null
    }

    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(userObject) {
    this.setState(userObject)
    console.log('Update User: ', this.state)
  }

  render() {
    return (
    <Router>
      <div>

        <TopNav updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>

        <Switch>
          <Redirect exact from="/" to="/welcome" />
          <Route path="/welcome" component={LandingPage} />

          <Route path="/studenthome" component={StudentHomePage} />
          <Route path="/teacherhome" component={TeacherHomePage} />
          <Route path="/teacherclass" component={TeacherClassPage} />
          <Route path="/studentclass" component={StudentClassPage} />
          <Route path="/signup" render={ () => (<Signup Signup={this.signup}/>)}/>
          <Route path="/login" render={ () => (<Login updateUser={this.updateUser}/>)} />>

          {/* <Route component={NoMatch} /> */}
        </Switch>
       {/* <Signup Signup={this.signup}/>  */}
        {/* <Login updateUser={this.updateUser}/> */}
      </div>
    </Router>
    )
  }
}

export default App;
