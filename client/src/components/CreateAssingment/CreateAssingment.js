import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './CreateAssingment.css';


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
        console.log(this.state);
        
        event.preventDefault();
      }
  
    handleChange(event) {
        const { name, value} = event.target;
        console.log(name)
        this.setState({
            [name]: value
          });

        // console.log(this)
        // this.setState({question: event.target.question})
        // this.setState({answer1: event.target.answer1})
        // this.setState({value1: event.target.type === 'checkbox' ? event.target.checked : event.target.value1})
        // this.setState({answer2: event.target.answer2})
        // this.setState({value2: event.target.type === 'checkbox' ? event.target.checked : event.target.value2})
        // this.setState({answer3: event.target.answer3})
        // this.setState({value3: event.target.type === 'checkbox' ? event.target.checked : event.target.value3})
        // this.setState({answer4: event.target.answer4})
        // this.setState({value4: event.target.type === 'checkbox' ? event.target.checked : event.target.value4})
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <Row>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Instructions</ControlLabel>
                    <FormControl componentClass="textarea" name="instructions" type="text" value={this.state.instructions} onChange={this.handleChange} placeholder="Add Assingment Instructions Here" />
                </FormGroup>
                <hr/>
                <ControlLabel>Question</ControlLabel>
                <FormControl
                        type="text"
                        name="question"
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
                        name="answer1"
                        value={this.state.answer1}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="value1"
                        type="checkbox"
                        checked={this.state.value1}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 2</ControlLabel>
                    <FormControl
                        type="text"
                        name="answer2"
                        value={this.state.answer2}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="value2"
                        type="checkbox"
                        checked={this.state.value2}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 3</ControlLabel>
                    <FormControl
                        type="text"
                        name="answer3"
                        value={this.state.answer3}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="value3"
                        type="checkbox"
                        checked={this.state.value3}
                        onChange={this.handleChange} />
                </Col>
                <Col xs={8} md={8}>
                    <ControlLabel>Answer 4</ControlLabel>
                    <FormControl
                        type="text"
                        name="answer4"
                        value={this.state.answer4}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </Col>
                <Col xs={2} md={2}>
                    <ControlLabel>Correct Answer?</ControlLabel>
                    <input
                        name="value4"
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

