import React, { useState } from 'react'
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Button } from '@material-ui/core'
import './Quizs.css'
import User from './User'

export default function Quizs() {
    const [index,setIndex]=useState(0)
  const increaseIndex=()=>{
    setIndex(
      index+1)
      setMaxSelect(1)
  }
    const Questions = [
        {
            id: 1,
            title: " How can you access the state of a component from inside of a member function?",
            op1: "this.values",
            op2: " this.prototype.stateValue",
            op3: "this.state",
            op4: "All of then",
            correct: "this.values"
        },
        {
            id: 2,
            title: "Props are __________ into other components",
            op1: "Injected",
            op2: "All of these",
            op3: "Methods",
            op4: "All of then",
            correct: "Methods"
        },
        {
            id: 3,
            title: "Which of the following API is a MUST for every ReactJS component?",
            op1: "getInitialState",
            op2: "renderComponent",
            op3: "None",
            op4: "All of then",
            correct: "renderComponent"
        },
        {
            id: 4,
            title: "At the highest level, React components have lifecycle events that fall into",
            op1: "Initialization",
            op2: "State/Property Updates",
            op3: "Destruction",
            op4: "All of these",
            correct: "All of these"
        },
        {
            id: 5,
            title: "What is a react.js in MVC?",
            op1: " Controller",
            op2: "Model",
            op3: "Router",
            op4: "All of then",
            correct: "Controller"
        },
        {
            id: 6,
            title: "React is mainly used for building ___.",
            op1: " Database",
            op2: "User interface",
            op3: "Design Platform",
            op4: "All of then",
            correct: "User interface"

        },
        {
            id: 7,
            title: "what is redux",
            op1: "State management Tool",
            op2: "language",
            op3: "Design pattern",
            op4: "All of then",
            correct: "State management Tool"

        },
        {
            id: 8,
            title: "what is latest version of React.js",
            op1: "17.0.0",
            op2: "16.14.0",
            op3: "16.13.0",
            op4: "17.0.1",
            correct: "17.0.1"

        },
        {
            id: 9,
            title: "how can we change state of varibale in functional component",
            op1: "useEffect",
            op2: "useState",
            op3: "constructor",
            op3: "Distructor",
            correct: "useState"

        },
        {
            id: 10,
            title: "Who made Reactjs liabrary",
            op1: "Google",
            op2: "Facebook",
            op3: "Microsoft",
            op4: "All of then",
            correct: "Facebook"

        }
    ];

    const [select, setSelect] = useState("")
    const [color, setColor]=useState('')
    const [score, setScore]=useState(0)
   const [maxselect,setMaxSelect]=useState(1)
   
  
    const selectOption=(option)=>{
        setMaxSelect(maxselect+1)
        if(maxselect<=3){
            if(Questions[index].correct==option){
                setSelect(option)
                setColor("green")
                setScore(score+1)     
            }
            else{
                setSelect(option)
                setColor("red") 
                setScore(score-0.25)
            }
        }
      
        else{
            alert("You have maximum 3 chance to give answer")
        }
    }
       
        
    if(Questions[index]){
        return (
       
            <div className="quizs">
               
                <h1>{Questions[index].title}</h1>
                <div className="options">
                     <h4 onClick={()=>selectOption(Questions[index].op1)}
                        style={{ backgroundColor: select === Questions[index].op1 ? color : "" }}
                    >{Questions[index].op1}</h4>
                    <h4 onClick={()=>selectOption(Questions[index].op2)}
                     style={{ backgroundColor: select === Questions[index].op2 ? color : "" }}
                    >{Questions[index].op2}</h4>
                    <h4 onClick={()=>selectOption(Questions[index].op3)}
                     style={{ backgroundColor: select === Questions[index].op3 ? color : "" }}
                    >{Questions[index].op3}</h4>
                    <h4 onClick={()=>selectOption(Questions[index].op4)}
                     style={{ backgroundColor: select === Questions[index].op4 ? color : "" }}
                    >{Questions[index].op4}</h4> 
                 
                </div>
                <Button variant="contained" color="primary" className="next__button" onClick={increaseIndex}>
                Next
                </Button>
            </div>
        )
    }
    else{
        return(
            <div>
                <User score={score}/>
            </div>
        )
    }
    
}
