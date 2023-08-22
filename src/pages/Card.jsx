import React, { useState } from "react";

const Card = ({ title, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-lg card group ${
        isFlipped ? "transform rotate-y-180" : ""
      }`}
      onClick={toggleFlip}
    >
      <div
        className={`front relative ${
          isFlipped ? "rotate-y-180" : ""
        } transition-transform duration-500 ease-in-out transform`}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{frontText}</p>
        </div>
      </div>
      <div
        className={`back absolute top-0 left-0 w-full h-full p-6 bg-white opacity-0 group-hover:opacity-100 ${
          isFlipped ? "rotate-y-180" : ""
        } transition-transform duration-500 ease-in-out transform`}
      >
        <ul className="text-gray-700 text-sm">
          {backText.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
