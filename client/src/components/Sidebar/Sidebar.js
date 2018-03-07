import React, { Component } from 'react';
import classNames from 'classnames';


class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      isHidden: true,
    };
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            

            <li>
              <a href=""  >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li>
              <a href="" onClick={this.toggleHidden.bind(this)}>
                <i className="fa fa-table fa-fw" /> &nbsp;Grade Book
              </a>
            </li>

            <li>
              <a href=""  >
                <i className="fa fa-table fa-fw" /> &nbsp;Forms
              </a>
            </li>

           
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
