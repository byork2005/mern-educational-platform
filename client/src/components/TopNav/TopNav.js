import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class TopNav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/users/logout').then(response => {
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            console.log('Logout success')
            this.setState({
                redirectTo: '/'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ', this.props)

        return (
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                {/* <Nav>
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
                </Nav> */}
                <Nav pullRight>
                    <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}href="/signup">Sign Up
            
                        </MenuItem>
                        {/* <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem> */}
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}href="/login">Log In</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4} onClick={this.logout}>Log Out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TopNav;