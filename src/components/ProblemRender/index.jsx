import React from "react"
import { useProblem } from "../../ProblemContext"

import { Button } from 'primereact/button';

import CheckBoxProblem from "../CheckBoxProblem";
import RadioButtonProblem from "../RadioButtonProblem";
import TextAreaProblem from "../TextAreaProblem";

const ProblemRender = () => {
  const { dataPerPage, onClickNextButton } = useProblem();
  
  const handleClickNewButton = () => {
    onClickNextButton()
  }

  return (
    <div className="container">
      <div className="problems">
        <div className="answer-area">
          {
            dataPerPage && dataPerPage.type === 'checkbox' && <CheckBoxProblem problem={dataPerPage} />
          }
          {
            dataPerPage && dataPerPage.type === 'textarea' && <TextAreaProblem problem={dataPerPage} />
          }
          {
            dataPerPage && dataPerPage.type === 'radio' && <RadioButtonProblem problem={dataPerPage} />
          }
        </div>
        <div className="nextbtn">
          <Button label="NEXT" icon="pi pi-check" iconPos="right" onClick={handleClickNewButton} />
        </div>
      </div>
    </div>
  )
}

export default ProblemRender