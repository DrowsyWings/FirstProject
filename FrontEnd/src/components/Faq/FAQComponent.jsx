import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" items-start h-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex flex-wrap justify-between p-2 px-32   rounded-md focus:outline-none"
        >
          <div className="text-black text-2xl font-semibold  leading-9 font-['Inter']">
            {question}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${isOpen ? "transform rotate-180" : ""} w-6 mt-2`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="flex flex-col p-2 px-32 pb-4 justify-start h-full text-[#070707] text-2xl font-normal font-['Inter'] leading-9">
            {answer}
          </div>
        )}
      </div>
    </>
  );
};

export default FaqItem;
