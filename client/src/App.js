import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import StudentHome from "./pages/StudentHome";
import TeacherHome from "./pages/TeacherHome";
import Login from "./pages/Login";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/studenthome" component={StudentHome} />
        <Route exact path="/teacherhome" component={TeacherHome} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
