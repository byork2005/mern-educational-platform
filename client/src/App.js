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
      name: null
    }

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  // componentDidMount() {
  //   this.getUser()
  // }

  updateUser (userObject) {
    this.setState(userObject)
  }

  // getUser() {
  //   axios.get('/studenthome/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         email: response.data.user.email,
  //         name: response.data.user.name
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         email: null,
  //         name: null
  //       })
  //     }
  //   })
  // }

  render() {
    return (
    <Router>
      <div>

        <TopNav/>

        <Switch>
          {/* <Route exact path="/" component={Login} /> */}

          <Route path="/studenthome" component={StudentHomePage} />
          <Route path="/teacherhome" component={TeacherHomePage} />
          <Route path="/teacherclass" component={TeacherClassPage} />
          <Route path="/studentclass" component={StudentClassPage} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
        {/* <Signup Signup={this.signup}/> */}
        <Login updateUser={this.updateUser}/>
      </div>
    </Router>
    )
  }
}

export default App;
