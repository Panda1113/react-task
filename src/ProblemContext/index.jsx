import React, { createContext, useState, useContext, useEffect } from "react";

const ProblemContext = createContext();

const problemData = [
  {
    id: 1,
    question: "WHAT'S YOUR NAME?",
    type: "textarea",
    answer: [],
  },
  {
    id: 2,
    question: "WHAT KIND OF MUSIC DO YOU LIKE?",
    type: "radio",
    answer: [
      { id: 0, items: "CARTOON" },
      { id: 1, items: "FILM" },
      { id: 2, items: "BOTH" },
      { id: 3, items: "BOTH NOT" },
    ]
  },
  {
    id: 3,
    question: "HOW MANY ANIAMALS DO YOU HAVE?",
    type: "checkbox",
    answer: [
      { id: 0, items: "ONE" },
      { id: 1, items: "TWO" },
      { id: 2, items: "THREE" },
      { id: 3, items: "FOUR" },
      { id: 4, items: "NEVER" },
    ]
  },
  {
    id: 4,
    question: "WHAT'S YOUR BROTHER NAME?",
    type: "textarea",
    answer: [],
  },
  {
    id: 5,
    question: "ARE YOU MARRIED?",
    type: "radio",
    answer: [
      { id: 0, items: "YES" },
      { id: 1, items: "NO" },
    ]
  },
];

export const ProblemProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [currentNo, setCurrentNo] = useState(0);
  let tempArray = [{}];
  const dataPerPage = problemData[currentNo];

  useEffect(()=>{
    if (currentNo === problemData.length) {
      alert(JSON.stringify(answers))
    }
  }, [answers])

  const onClickNextButton = async () => {
    setAnswers([...answers, tempArray]);
    setCurrentNo(currentNo + 1);
  }

  const updateAnswerCurrentPage = (answer) => {
    tempArray = answer
  }

  return (
    <ProblemContext.Provider value={{ dataPerPage, answers, updateAnswerCurrentPage, onClickNextButton }}>
      {children}
    </ProblemContext.Provider>
  );
}

export const useProblem = () => {
  return useContext(ProblemContext);
}