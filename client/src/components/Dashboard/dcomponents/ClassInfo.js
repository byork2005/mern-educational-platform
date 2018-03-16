import React from "react";
import {Row, Col, Well} from 'react-bootstrap';
import API from "../../../utils/API";


class ClassInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'Modern World History',
            teacher: 'Mrs. Spencer',
            schedule: 'M-F, 12:50-1:45',
            location: 'Room 211'
        };    
    };

    // componentDidMount() {
    //     this.loadClassInfo();
    // };
    
    loadClass = () => {
        API.getClasses()
          .then(res =>
            this.setState({ classes: res.data, name: "", teacher: "", schedule: "", location: "" })
          )
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.teacher}</h3>
                <h3>{this.state.schedule}, {this.state.location}</h3>
            </div>
        )
    }

}

export default ClassInfo;
