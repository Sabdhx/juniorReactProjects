import React, { useEffect, useState } from "react";
import { MyContext } from "./ContextArray";
import { useContext } from "react";
import Input from "./Inputs";

function MainPage() {
  const [counter, setCounter] = useState(0);
  const { data } = useContext(MyContext);
  const [score, setScore] = useState(0);

  function nextAndScoreBtn(answer) {
    if (data[counter].correctAnswer === answer) {
      setScore(score + 1);
    }
    setCounter(counter + 1);
  }

  return (
    <>
    {
      counter < data.length ? (
   
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-8">{data[counter].question}</h1>
        <div className="space-y-4">
          {data[counter].options.map((item, id) => (
            <div
              key={id}
              className="w-[100%] cursor-pointer bg-white rounded-md p-4 shadow-md hover:shadow-lg transition duration-300"
              onClick={() => {
                nextAndScoreBtn(data[counter].correctAnswer);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <h1 className="text-2xl mt-8">Score: {score}</h1>
      </div>
      ):(
          <Input/>
      )}
      
    </>
  );
}

export default MainPage;
