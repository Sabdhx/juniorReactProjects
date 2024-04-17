import React, { useContext, useState } from "react";
import { MyContext } from "./ContextArray";

function Inputs() {
  const { data ,setData} = useContext(MyContext);
  const [question, setquestion] = useState("");
  const [options1, setOptions1] = useState("");
  const [options2, setOptions2] = useState("");
  const [options3, setOptions3] = useState("");
  const [options4, setOptions4] = useState("");

  const [CorrectAnswer, setCorrectAnswer] = useState("");
  const [wholeData, setwholeData] = useState({});
  const options = [options1, options2, options3, options4];
 

  function submitBtn() {
   let newData= {
      question: question,
      options: options,
      CorrectAnswer: CorrectAnswer,
    }
     setwholeData(newData)
     setData([...data, newData]);  }
  return (
    <div>
      <h1 className="text-2xl text-center">Input the values here bro..</h1>
      <div className="flex justify-center m-3">
        questions:
        <input
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
          value={question}
          onChange={(e) => {
            setquestion(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center m-3">
        option 1 :
        <input
          value={options1}
          onChange={(e) => {
            setOptions1(e.target.value);
          }}
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
        />
      </div>
      <div className="flex justify-center m-3">
        option 2 :
        <input
          value={options2}
          onChange={(e) => {
            setOptions2(e.target.value);
          }}
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
        />
      </div>
      <div className="flex justify-center m-3">
        option 3 :
        <input
          value={options3}
          onChange={(e) => {
            setOptions3(e.target.value);
          }}
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
        />
      </div>
      <div className="flex justify-center m-3">
        option 4 :
        <input
          value={options4}
          onChange={(e) => {
            setOptions4(e.target.value);
          }}
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
        />
      </div>
      <div className="flex justify-center m-3">
        CorrectAnswer :
        <input
          value={CorrectAnswer}
          onChange={(e) => {
            setCorrectAnswer(e.target.value);
          }}
          type="text"
          className=" px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
        bg-gray-300
        "
        />
      </div>
      <div className="flex justify-center m-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={
            submitBtn
       }
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Inputs;
