import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
// import StudentHome from "./pages/StudentHome";
import TeacherClassPage from "./pages/Teacher/ClassPage";
import TeacherHomePage from "./pages/Teacher/HomePage";
import StudentClassPage from "./pages/Student/ClassPage";
import StudentHomePage from "./pages/Student/HomePage";

// import Login from "./pages/Login";
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import Signup from "./pages/Login/sign-up.js";
import Login from "./pages/Login/login.js"

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const App = () => (
  <Router>
    <div>

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        {/* <Route exact path="/" component={Login} /> */}

        <Route path="/studenthome" component={StudentHomePage} />
        <Route path="/teacherhome" component={TeacherHomePage} />
        <Route path="/teacherclass" component={TeacherClassPage} />
        <Route path="/studentclass" component={StudentClassPage} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
      {/* <Signup signup={this.signup}/> */}
      <Login updateUser={this.updateUser}/>
    </div>
  </Router>
);

export default App;
