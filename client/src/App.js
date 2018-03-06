import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import StudentHome from "./pages/StudentHome";
// import TeacherHome from "./pages/TeacherHome";
// import TeacherClass from "./pages/TeacherClass";
// import Login from "./pages/Login";
import {Nav, NavItem} from "react-bootstrap";


function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const App = () =>
  <Router>
    <div>
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">
      NavItem 1 content
    </NavItem>
    <NavItem eventKey={2} title="Item">
      NavItem 2 content
    </NavItem>
    <NavItem eventKey={3} disabled>
      NavItem 3 content
    </NavItem>
  </Nav>
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