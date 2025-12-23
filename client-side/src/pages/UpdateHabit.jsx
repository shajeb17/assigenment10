import React, { use } from "react";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";
import { toast } from "react-toastify";

const UpdateHabit = ({ habit, refreshData }) => {
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
    fetch(`http://localhost:3000/mydata/${habit?._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((value) => value.json())
      .then(
        () =>{ toast.success("user info update successfully"),
        refreshData(),
        document.getElementById("update_modal").close()
    })
  };
  return (
    <div>
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="max-w-md mx-auto p-6 my-9 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Habit</h2>
            <form className="space-y-4" onSubmit={handleclick}>
              <div>
                <label className="block mb-1 font-semibold">
                  Update Habit Title
                </label>
                <input
                  type="text"
                  name="habitTitle"
                  defaultValue={habit?.habitTitle}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">
                  Update Description
                </label>
                <textarea
                  name="description"
                  defaultValue={habit?.description}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">
                  Update Category
                </label>
                <select
                  name="category"
                  defaultValue={habit?.category}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option>Morning</option>
                  <option>Work</option>
                  <option>Fitness</option>
                  <option>Evening</option>
                  <option>Study</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold">
                  Update Reminder Time
                </label>
                <input
                  type="time"
                  name="reminderTime"
                  defaultValue={habit?.reminderTime}
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
                  value={userInfo?.displayName || ""}
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

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateHabit;
