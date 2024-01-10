import React, { useState } from "react";
import { useProblem } from "../../ProblemContext"
import { RadioButton } from 'primereact/radiobutton';

const RadioButtonProblem = (props) => {
  const { problem } = props;
  const { updateAnswerCurrentPage } = useProblem();

  const answersList = problem.answer;
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    let tempArray = {};
    tempArray.question = problem.question;
    tempArray.answer = e.value;
    setAnswer(e.value)
    updateAnswerCurrentPage(tempArray);  
  }
  return (
    <div>
      <div className="title">
        <h1>{problem.question}</h1>
      </div>
      <div className="answers">
        {
          answersList?.map((item, index) => {
            return <div key={index} className="flex align-items-center radiobutton-container">
              <RadioButton inputId={index} name={item.items} value={item.items} onChange={(e)=>handleChange(e)} checked={answer === item.items} />
              <label htmlFor="ingredient1" className="ml-2">{item.items}</label>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default RadioButtonProblem;