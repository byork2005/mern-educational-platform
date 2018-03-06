import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import StudentHome from "./pages/StudentHome";
// import TeacherHome from "./pages/TeacherHome";
// import TeacherClass from "./pages/TeacherClass";
// import Login from "./pages/Login";
import {Nav, NavItem, Navbar, NavbarBrand, MenuItem, NavDropdown} from "react-bootstrap";


function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const App = () =>
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
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/studenthome" component={StudentHome} />
        <Route exact path="/teacherhome" component={TeacherHome} />
        <Route exact path="/teacherclass" component={TeacherClass} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;