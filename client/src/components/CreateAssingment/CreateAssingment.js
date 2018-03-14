import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import Form from "react-jsonschema-form";
import './CreateAssingment.css';

//test with the react-jsonschema-form

// const schema = {
//     title: "Todo",
//     type: "object",
//     required: ["title"],
//     properties: {
//       title: {type: "string", title: "Title", default: "A new task"},
//       done: {type: "boolean", title: "Done?", default: false}
//     }
//   };
   
// const log = (type) => console.log.bind(console, type);

// class CreateAssingment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
        
//         };
//       }

   

//     render() {
   

//         return (
//             <div>
//                 <Row>
//                    Create Shit Here
//                 </Row>
//                 <Form schema={schema}
//                     onChange={log("changed")}
//                     onSubmit={log("submitted")}
//                     onError={log("errors")} />
//                 <Row>
                
//                 </Row>
//             </div>
//         );
//     }

// }

// export default CreateAssingment;

//practice form
class CreateAssingment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        instructions:"",
        question:"",
        answer1:"",
        value1:false,      
        answer2:"",
        value2:false,      
        answer3:"",
        value3:false,      
        answer4:"",
        value4:false      
      };
  
    //   this.handleChange = this.handleChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Instructions' + this.state.instructions + " " + 'Question ' + this.state.question);
        event.preventDefault();
      }
  
    handleChange(event) {
        this.setState({instructions: event.target.instructions});
        this.setState({question: event.target.question})
        this.setState({answer1: event.target.answer1})
        this.setState({value1: event.target.type === 'checkbox' ? event.target.checked : event.target.value1})
        this.setState({answer2: event.target.answer2})
        this.setState({value2: event.target.type === 'checkbox' ? event.target.checked : event.target.value2})
        this.setState({answer3: event.target.answer3})
        this.setState({value3: event.target.type === 'checkbox' ? event.target.checked : event.target.value3})
        this.setState({answer4: event.target.answer4})
        this.setState({value4: event.target.type === 'checkbox' ? event.target.checked : event.target.value4})
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <Row>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Instructions</ControlLabel>
                    <FormControl componentClass="textarea" value={this.state.instructions} onChange={this.handleChange} placeholder="Add Assingment Instructions Here" />
                </FormGroup>
                <hr/>
                <ControlLabel>Question</ControlLabel>
                <FormControl
                        type="text"
                        value={this.state.question}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                <FormControl.Feedback />
                <hr/>
            </Row>
            <Row>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 1</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.answer1}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="boolean"
                        type="checkbox"
                        checked={this.state.value1}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 2</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.answer2}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="boolean"
                        type="checkbox"
                        checked={this.state.value2}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 3</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.answer3}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="boolean"
                        type="checkbox"
                        checked={this.state.value3}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 4</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.answer4}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="boolean"
                        type="checkbox"
                        checked={this.state.value4}
                        onChange={this.handleChange} />
                </Col>
            </Row>
            <Row>
            <input type="submit" value="Submit" />  
            </Row>
        </form>
      );
    }
  }

export default CreateAssingment;


//put within for tags
        // <label>
        //     Is going:
        //     <input
        //       name="isGoing"
        //       type="checkbox"
        //       checked={this.state.isGoing}
        //       onChange={this.handleInputChange} />
        //   </label>
        //   <br />
        //   <label>
        //     Number of guests:
        //     <input
        //       name="numberOfGuests"
        //       type="number"
        //       value={this.state.numberOfGuests}
        //       onChange={this.handleInputChange} />
        //   </label>