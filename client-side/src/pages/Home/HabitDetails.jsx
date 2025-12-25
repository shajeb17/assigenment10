import React from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const HabitDetails = () => {
  let data = useLocation();
  let habit = data.state;

  let handleClick = (id) => {
    fetch(`http://localhost:3000/habitcomplete/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message));
  };
  return (
    <div>
      <div className="max-w-md mx-auto my-8 bg-white shadow-lg rounded-xl p-6 border">
        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 font-semibold rounded-full">
          {habit.category}
        </span>
        <h2 className="text-2xl font-bold mt-3">{habit.habitTitle}</h2>
        <p className="text-gray-600 mt-2">{habit.description}</p>

        <div className="mt-3 inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
          🔥 Streak: {habit.streak} days
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold">Progress (Last 30 days)</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${habit.progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 font-medium">
            {habit.progress}% Completed
          </p>
        </div>

        <div className="mt-5 border-t pt-4 text-sm text-gray-700">
          <p>
            <strong>Creator:</strong> {habit.userName}
          </p>
          <p>
            <strong>Email:</strong> {habit.userEmail}
          </p>
          <p>
            <strong>Reminder:</strong> {habit.reminderTime}
          </p>
        </div>

        <button
          onClick={() => handleClick(habit?._id)}
          className="mt-6 w-full bg-linear-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90"
        >
          Mark Complete
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
