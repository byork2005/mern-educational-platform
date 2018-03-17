import React from "react";
import {Well} from 'react-bootstrap';
import './DateClock.css';

// const DateClock = () => 
//     <Well className="clockWell">
//         This is where a clock will be
//     </Well>

class DateClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <Well className="clockWell">
          <h1> Date and Time: </h1>
            <p className="App-clock">
             {this.state.time}.
            </p>
        </Well>
      );
    }
  }

export default DateClock;