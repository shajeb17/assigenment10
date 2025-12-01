import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";

const Addhabit = () => {
  let { userInfo } = use(AuthContext);


  let handleclick = (e) => {
    e.preventDefault();
    let habitTitle = e.target.habitTitle.value;
    let description = e.target.description.value;
    let category = e.target.category.value;
    let reminderTime = e.target.reminderTime.value;
    let userEmail = e.target.email.value;
    let userName = e.target.text.value;
    let user = {
      habitTitle,
      description,
      category,
      reminderTime,
      userEmail,
      userName,
    };
    fetch("http://localhost:3000/alluser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => {
        toast.success("success ! add new habit");
        e.target.reset();
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="max-w-md mx-auto p-6 my-9 darkmode:text-black bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Habit</h2>
      <form className="space-y-4" onSubmit={handleclick}>
        <div>
          <label className="block mb-1 font-semibold">Habit Title</label>
          <input
            type="text"
            name="habitTitle"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select name="category" className="w-full border px-3 py-2 rounded">
            <option>Morning</option>
            <option>Work</option>
            <option>Fitness</option>
            <option>Evening</option>
            <option>Study</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Reminder Time</label>
          <input
            type="time"
            name="reminderTime"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo?.email || ""}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="text"
            value={userInfo?.displayName  || ""}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Habit
        </button>
      </form>
    </div>
  );
};

export default Addhabit;
