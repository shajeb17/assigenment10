import React from "react";

const Card = ({ habit }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="px-4 py-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
          {habit.category}
        </span>
      </div>


      <div className="px-4 ">
        <h2 className="text-xl font-bold text-gray-800">{habit.habitTitle}</h2>
      </div>

   
      <div className="px-4 py-1">
        <p className="text-gray-600">{habit.description}</p>
      </div>


      <div className="px-4 py-2 flex items-center text-gray-700">
        <svg
          className="w-5 h-5 mr-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{habit.reminderTime}</span>
      </div>


      <div className="px-4 py-2 border-t border-gray-200 mt-2 flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold text-gray-700">
            {habit.userName}
          </p>
          <p className="text-xs text-gray-500">{habit.userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
