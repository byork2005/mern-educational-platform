import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './Assingments.css';
import Question from './Question.js'


const DATA = "./test.json"

class AssingmentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: { 
                "instructions":"World War I Review.  Complete to the best of your ability.  Open Notes.",
            "questions": [
                {
                "question": "The First World War saw the destruction of many long reigning Royal Houses across Europe. Which of the following monarchs survived the war?",
                "answers": [
                    {
                        "answer":"Kaiser Wilhelm II",
                        "value":false 
                    },
                    {
                        "answer":"King George V",
                        "value":true
                    },
                    {
                        "answer":"Tsar Nicholas II",
                        "value":false
                    },
                    {
                        "answer":"President Woodrow Wilson",
                        "value":false
                    }]},
                {
                "question": "Gavrilo Princip, the man who shot Archduke Franz Ferdinand and sent Europe to war, was the member of a Slavic terrorist organization. Which of the following groups did he belong to?",
                "answers": [
                    {
                        "answer":"The Black hand",
                        "value":true
                    },
                    {
                        "answer":"The White Rose",
                        "value":false
                    },
                    {
                        "answer":"The Maquis",
                        "value":false 
                    },
                    {
                        "answer":"The Bolshevicks",
                        "value":false
                    }]},
                    {
                "question": "When Germany moved it's troops toward France, they avoided a straight path across the border, preferring to swing North through Belgium.  What was the name of this military strategy?",
                "answers": [
                    {
                        "answer":"North Route",
                        "value":false
                    },
                    {
                        "answer":"Belgium Plan",
                        "value":false
                    },
                    {
                        "answer":"Normandy Swing",
                        "value":false
                    },
                    {
                        "answer":"The Schlieffen Plan",
                        "value":true
                    }]},
                    {
                "question": "During the first month of the war, Germany delved deep into France, almost capturing Paris.  However, the efforts of one group of Parisans helped keep them at bay.  What profession is attributed with making sure French soliders were in position to protect Paris?",
                "answers": [
                    {
                        "answer":"Barristas",
                        "value":false
                    },
                    {
                        "answer":"Train Conductors",
                        "value":false
                    },
                    {
                        "answer":"Military Truck Drivers",
                        "value":false  
                    },
                    {
                        "answer":"Taxi Drivers",
                        "value":true
                    }]},
                    {
                "question": "Christmas of 1914 is remembered by a famous stopage in hostilities, as troops from both sides left their tenches and mingled. What did they famously play?",
                "answers": [
                    {
                        "answer":"Soccer",
                        "value":true 
                    },
                    {
                        "answer":"Cricket",
                        "value":false
                    },
                    {
                        "answer":"Stones",
                        "value":false  
                    },
                    {
                        "answer":"Roulette",
                        "value":false
                    }]},
                    {
                "question": "Currently known for his role in the popular movie Wonder Woman, this man became one of the co-leaders, along with Paul von Hindenberg, of Germany's military efforts throughout the war.",
                "answers": [
                    {
                        "answer":"Eric Ludendorff",
                        "value":true 
                    },
                    {
                        "answer":"Kaiser Wilhelm II",
                        "value":false
                    },
                    {
                        "answer":"Rasputin",
                        "value":false  
                    },
                    {
                        "answer":"Adolf Hitler",
                        "value":false
                    }]},
                    {
                "question": "One of the more famous military vehicles of the First World War, the German Zepplin began bombing London almost 30 years before Nazi Germany. Which of the following was a critcal component of its construction?",
                "answers": [
                    {
                        "answer":"50,000 Tons Aluminium",
                        "value":false
                    },
                    {
                        "answer":"250,000 Cows",
                        "value":true
                    },
                    {
                        "answer":"2 sqk Fabric",
                        "value":false  
                    },
                    {
                        "answer":"Helium. Like a lot",
                        "value":false
                    }]},
                    {
                "question": "The Western Front is most famous for the trenches which weaved across the continent.  At the height, what was the length of this front?",
                "answers": [
                    {
                        "answer":"12,3000 km",
                        "value":false 
                    },
                    {
                        "answer":"1,100 km",
                        "value":false
                    },
                    {
                        "answer":"625 km",
                        "value":false 
                    },
                    {
                        "answer":"700 km",
                        "value":true
                    }]},
                    {
                "question": "Sitting on the sidelines for most of the war, the United States entered on the side of the Allies in 1917.  What event finally pushed America into the conflict?",
                "answers": [
                    {
                        "answer":"Ugly Germans",
                        "value":false 
                    },
                    {
                        "answer":"The Sinking of the Lusitania",
                        "value":true
                    },
                    {
                        "answer":"War Monger Wilson",
                        "value":false  
                    },
                    {
                        "answer":"Expansionism",
                        "value":false
                    }]},
                    {
                "question": "On 11 AM on November 11th, 1918, all was quiet on the Western Front.  Every year, the United Kingdom remembers the ceasefire by encircling the Tower of London with which flower?",
                "answers": [
                    {
                        "answer":"Roses",
                        "value":false 
                    },
                    {
                        "answer":"Lillies",
                        "value":false
                    },
                    {
                        "answer":"Poppies",
                        "value":true  
                    },
                    {
                        "answer":"Edelweiss",
                        "value":false
                    }]}
               ]
        },
            index: 0,
            numberOfQuestions: 10,
            score: 0,
            answers: [],
            completed: false
        };
      }

    // componentDidMount() {
    //     fetch('./test.json')
    //         .then(results => {
    //             console.log(results);
    //         }).then(data => {
    //             console.log(data);
    //         })

    //     }


      handleSubmit() {
        if (this.state.index + 1 < this.state.numberOfQuestions) {
          this.setState({'index': this.state.index + 1})
        } else {
          this.setState({'completed': true})
          let score = this.state.score || 0
          this.state.answers.map((answer, i) => (
            score = score + this.state.quiz.questions[i].answers[answer].value
          ))
          this.setState({'score': score})
        }
      }

      handleAnswerSelected(event) {
        let list = [...this.state.answers.slice(0, this.state.index),
                    parseInt(event.target.value),
                    ...this.state.answers.slice(this.state.index + 1)]
        this.setState({'answers': list})
      }
   

    render() {
        const {
            quiz, index, numberOfQuestions, score 
        } = this.state

        return (
            <div>
                <Row>
                    <div>
                        <h1>{quiz.instructions}</h1>
                        <div>
                            <h3>Your score is {score} out of 10</h3>
                            <p>Score will update once completed.</p>
                        </div>
                        
                        <div>
                            <h2>Question {index + 1} of {numberOfQuestions}</h2>
                            {quiz.questions && index < quiz.questions.length ?
                                <Question
                                    question={quiz.questions[index]}
                                    index={index}
                                    onAnswerSelected={ (event) => this.handleAnswerSelected (event)}
                                onSubmit={ () => this.handleSubmit() } 
                            /> 
                        : '' }
                
                        </div>
                    </div>
                </Row>
            </div>
        );
    }

}

export default AssingmentContainer;