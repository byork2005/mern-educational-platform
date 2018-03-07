import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import StudentHome from "./pages/StudentHome";
import TeacherClassPage from "./pages/TeacherClassPage";
// import TeacherClass from "./pages/TeacherClass";
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
        <Route exact path="/studenthome" component={StudentHome} />
        {/* <Route exact path="/teacherhome" component={TeacherHome} /> */}
        <Route exact path="/teacherclass" component={TeacherClassPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;