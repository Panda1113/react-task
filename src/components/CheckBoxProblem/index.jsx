import React, { useState } from "react";
import { useProblem } from "../../ProblemContext";

import { Checkbox } from 'primereact/checkbox';


const CheckBoxProblem = (props) => {
  const { problem } = props;
  const { updateAnswerCurrentPage } = useProblem();
  
  const answersList = problem.answer;
  const [answer, setAnswer] = useState([]);

  const handleCheck = (e) => {
    let _answer = [...answer];
    let tempArray = {};

    if (e.checked)
      _answer.push(e.value);
    else
      _answer.splice(_answer.indexOf(e.value), 1);

      tempArray.question = problem.question;
      tempArray.answer = _answer
    setAnswer(_answer);
    updateAnswerCurrentPage(tempArray);
  }
  return (
    <div>
      <div>
        <h1>{problem.question}</h1>
      </div>
      <hr />
      <div>
        {
          answersList?.map((item, index) => {
            return <div key={index} className="flex align-items-center checkbox-container">
              <Checkbox id={item.id} inputId={item.id} name={item.items} value={item.items} onChange={handleCheck} checked={answer.includes(item.items)} />
              <label htmlFor={item.items} className="ml-2">{item.items}</label>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default CheckBoxProblem;