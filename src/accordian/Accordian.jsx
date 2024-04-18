import React, { useState } from "react";

function Accordion() {
  const [toggle, setToggle] = useState(false);

  const array = [
    { question: "What's your name", answer: "My name is Shubham" },
    {
      question: "What's your hobby",
      answer: "My hobby is coding",
    },
    {
      question: "In which class do you study",
      answer: "I study in 13th grade",
    },
  ];

  function toggleBtn(id) {
    if (toggle === id) {
      setToggle(false);
    } else {
      setToggle(id);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {array.map((item, id) => {
        return (
          <div key={id} className="border rounded-md mb-2">
            <h1
              className="flex justify-between items-center py-4 px-6 cursor-pointer bg-gray-200"
              onClick={() => toggleBtn(id)}
            >
              <span>{item.question}</span>
              <svg
                className={`h-6 w-6 ${toggle === id ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={toggle === id ? "M19 9l-7 7-7-7" : "M9 5l7 7 7-7"}
                />
              </svg>
            </h1>
            {toggle === id && (
              <p className="px-6 pb-4">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
