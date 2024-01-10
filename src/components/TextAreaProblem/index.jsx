import React, { useState } from "react";
import { useProblem } from "../../ProblemContext";

import { InputTextarea } from 'primereact/inputtextarea';

const TextAreaProblem = (props) => {
  const { problem } = props;
  const { updateAnswerCurrentPage } = useProblem();

  const answersList = problem.answer;
  
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    let tempArray = {};
    tempArray.question = problem.question;
    tempArray.answer  = e.target.value;
    setAnswer(e.target.value);

    updateAnswerCurrentPage(tempArray);
  }

  return (
    <div>
      <div>
        <h1>{problem.question}</h1>
      </div>
      <div>
        {
          answersList && <div className="card flex justify-content-center textarea-container">
            <InputTextarea value={answer} onChange={handleChange} style={{ width: "100%" }} rows={5} cols={30} />
          </div>
        }
      </div>
    </div >
  )
}

export default TextAreaProblem;