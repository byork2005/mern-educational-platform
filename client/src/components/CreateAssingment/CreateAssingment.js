import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Carousel } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import './CreateAssingment.css';
import './style.css';

//practice form
class CreateAssingment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        instructions:"",
        question1: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question2: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question3: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question4: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question5: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question6: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question7: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question8: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question9: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        },
        question10: {
            question:"",
            answer1:"",
            value1:false,      
            answer2:"",
            value2:false,      
            answer3:"",
            value3:false,      
            answer4:"",
            value4:false,
        }
      };

      
  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    //this is a sunction to create an array, right now when it is called it 
    //breaks the dom
    convertObjQuestionsToArr() {
        return [
            this.state.question1,
            this.state.question2,
            this.state.question3,
            this.state.question4,
            this.state.question5,
            this.state.question6,
            this.state.question7,
            this.state.question8,
            this.state.question9,
            this.state.question10
        ]
    }
    //right now, on submitt, the questions are printed in colse, it is
    //saved in state.  just need to push it to the db
    handleSubmit(event) {
        // event.convertObjQuestionsToArr();
        event.preventDefault();
        console.log(this.state)
        alert("Assingment Created.  Please return to Dashboard")
        
        // console.log(event.convertObjQuestionsToArr());
      }
  
    handleChange(event) {
        const { name, value} = event.target;
        console.log(name)
        this.setState({
            [name]: value
          });
    };

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <Row>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Instructions</ControlLabel>
                    <FormControl componentClass="textarea" name="instructions" type="text" value={this.state.instructions} onChange={this.handleChange} placeholder="Add Assingment Instructions Here" />
                </FormGroup>
                <hr/>
            </Row>
            
                <Row>
                    <div className="scroll">
                    
                        <Row>
                            <Col xs={10} md={10}>
                            <h4>Question 1</h4>
                            <FormControl
                                    type="text"
                                    name="question1"
                                    value={this.state.question1.question}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                            <FormControl.Feedback />
                            </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question1.answer1}
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
                                        checked={this.state.question1.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question1.answer2}
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
                                        checked={this.state.question1.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question1.answer3}
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
                                        checked={this.state.question1.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question1.answer4}
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
                                        checked={this.state.question1.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        
                        </Row>
                        <hr/>

                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 2</h4>
                                <FormControl
                                        type="text"
                                        name="question2"
                                        value={this.state.question2.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question2.answer1}
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
                                        checked={this.state.question2.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question2.answer2}
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
                                        checked={this.state.question2.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question2.answer3}
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
                                        checked={this.state.question2.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question2.answer4}
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
                                        checked={this.state.question2.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 3</h4>
                                <FormControl
                                        type="text"
                                        name="question3"
                                        value={this.state.question3.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question3.answer1}
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
                                        checked={this.state.question3.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question3.answer2}
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
                                        checked={this.state.question3.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question3.answer3}
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
                                        checked={this.state.question3.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question3.answer4}
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
                                        checked={this.state.question3.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 4</h4>
                                <FormControl
                                        type="text"
                                        name="question4"
                                        value={this.state.question4.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question4.answer1}
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
                                        checked={this.state.question4.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question4.answer2}
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
                                        checked={this.state.question4.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question4.answer3}
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
                                        checked={this.state.question4.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question4.answer4}
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
                                        checked={this.state.question4.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 5</h4>
                                <FormControl
                                        type="text"
                                        name="question5"
                                        value={this.state.question5.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question5.answer1}
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
                                        checked={this.state.question5.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question5.answer2}
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
                                        checked={this.state.question5.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question5.answer3}
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
                                        checked={this.state.question5.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question5.answer4}
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
                                        checked={this.state.question5.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>

                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 6</h4>
                                <FormControl
                                        type="text"
                                        name="question6"
                                        value={this.state.question6.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question6.answer1}
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
                                        checked={this.state.question6.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question6.answer2}
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
                                        checked={this.state.question6.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question6.answer3}
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
                                        checked={this.state.question6.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question6.answer4}
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
                                        checked={this.state.question6.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 7</h4>
                                <FormControl
                                        type="text"
                                        name="question7"
                                        value={this.state.question7.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question7.answer1}
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
                                        checked={this.state.question7.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question7.answer2}
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
                                        checked={this.state.question7.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question7.answer3}
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
                                        checked={this.state.question7.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question7.answer4}
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
                                        checked={this.state.question7.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 8</h4>
                                <FormControl
                                        type="text"
                                        name="question8"
                                        value={this.state.question6.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question8.answer1}
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
                                        checked={this.state.question8.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question8.answer2}
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
                                        checked={this.state.question8.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question8.answer3}
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
                                        checked={this.state.question8.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question8.answer4}
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
                                        checked={this.state.question8.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 9</h4>
                                <FormControl
                                        type="text"
                                        name="question9"
                                        value={this.state.question9.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question9.answer1}
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
                                        checked={this.state.question9.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question9.answer2}
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
                                        checked={this.state.question9.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question9.answer3}
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
                                        checked={this.state.question9.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question9.answer4}
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
                                        checked={this.state.question9.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 10</h4>
                                <FormControl
                                        type="text"
                                        name="question10"
                                        value={this.state.question10.question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.question10.answer1}
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
                                        checked={this.state.question10.value1}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.question10.answer2}
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
                                        checked={this.state.question10.value2}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.question10.answer3}
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
                                        checked={this.state.question10.value3}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.question10.answer4}
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
                                        checked={this.state.question10.value4}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                    </div>
                            
                </Row>
                <Row>
                    <hr/>
                    
                   <input type="submit" value="Submit" />
                    
                </Row>
            {/* </div> */}
        </form>
      );
    }
  }

export default CreateAssingment;


