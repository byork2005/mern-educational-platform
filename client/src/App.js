import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import TeacherClassPage from "./pages/Teacher/ClassPage";
import TeacherHomePage from "./pages/Teacher/HomePage";
import StudentClassPage from "./pages/Student/ClassPage";
import StudentHomePage from "./pages/Student/HomePage";
import Signup from "./pages/Login/sign-up.js";
import Login from "./pages/Login/login.js"

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

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
          {/* <Route exact path="/" component={Login} /> */}

          <Route path="/studenthome" component={StudentHomePage} />
          <Route path="/teacherhome" component={TeacherHomePage} />
          <Route path="/teacherclass" component={TeacherClassPage} />
          <Route path="/studentclass" component={StudentClassPage} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
       {/* <Signup Signup={this.signup}/>  */}
        <Login updateUser={this.updateUser}/>
      </div>
    </Router>
    )
  }
}

export default App;
