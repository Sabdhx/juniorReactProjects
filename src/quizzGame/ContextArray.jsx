import React,{ createContext, useState } from "react";


export const MyContext = createContext();

function ContextArray({children }) {
  const [data, setData] = useState([
    {
      id:"1",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      id:"2",
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
      correctAnswer: "Blue Whale",
    },
    {
      id:"3",
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
  ]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children }
    </MyContext.Provider>
  );
}

export default ContextArray;
