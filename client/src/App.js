import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
// import StudentHome from "./pages/StudentHome";
import TeacherClassPage from "./pages/Teacher/ClassPage";
import TeacherHomePage from "./pages/Teacher/HomePage";
import StudentClassPage from "./pages/Student/ClassPage";
import StudentHomePage from "./pages/Student/HomePage";
// import Login from "./pages/Login";
import {Nav, NavItem, Navbar, NavbarBrand, MenuItem, NavDropdown} from "react-bootstrap";


function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const App = () =>
  <Router>
    <div>
      <TopNav />
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        <Route path="/studenthome" component={StudentHomePage} />
        <Route path="/teacherhome" component={TeacherHomePage} />
        <Route path="/teacherclass" component={TeacherClassPage} />
        <Route path="/studentclass" component={StudentClassPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;