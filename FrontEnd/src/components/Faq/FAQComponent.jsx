import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="border-b  border-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-start   items-center py-8 px-4 sm:px-6 focus:outline-none"
        >
          <span className="text-black text-lg sm:text-xl md:text-2xl font-semibold font-['Inter'] leading-normal sm:leading-relaxed md:leading-9 text-left">
            {question}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${
              isOpen ? "transform rotate-180" : ""
            } w-6 h-6 flex-shrink-0 ml-4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="py-4 px-4 sm:px-6">
            <p className="text-[#070707] text-base sm:text-lg md:text-xl font-normal font-['Inter'] leading-normal sm:leading-relaxed md:leading-7">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
