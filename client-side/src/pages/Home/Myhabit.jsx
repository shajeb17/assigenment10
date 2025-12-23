import React, { use, useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import { AuthContext } from "../../uesContextHook/formhook/AuthContex";
import UpdateHabit from "../UpdateHabit";
import { ScaleLoader } from "react-spinners";

const Myhabit = () => {
  let [data, myData] = useState([]);
  let { userInfo } = use(AuthContext);
  let [selectedHabit, setSelectedHabit] = useState(null);
  let [loadding, setLoadding] = useState(true);
  let users = userInfo?.email;
  // useEffect(() => {
  //   fetch(`http://localhost:3000/mydata?email=${users}`)
  //     .then((result) => result.json())
  //     .then((res) => myData(res));
  // }, [userInfo]);
  
  
  
  const loadData = () => {
    fetch(`http://localhost:3000/mydata?email=${users}`,{
      headers:{
        authorization:`Bearer ${userInfo?.accessToken}`
      }
    })
      .then((result) => result.json())
      .then((res) => (myData(res) ,setLoadding(false)));
  };

  useEffect(() => {
    if (users) loadData();
  }, [userInfo]);

  let handleDelete = (id) => {
    fetch(`http://localhost:3000/mydata/${id}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((value) => {
        if (value.deletedCount) {
          let del = data.filter((data) => data?._id !== id);
          myData(del);
        }
      });
  };
  const openModal = (habit) => {
    setSelectedHabit(habit);
    const modal = document.getElementById("update_modal");
    modal.showModal();
  };
  return (
    <div className="grid grid-cols-3 m-auto w-11/12 gap-4 my-10 max-[900px]:grid-cols-2 max-[475px]:grid-cols-1">
      {loadding === true ? (
        <div className="flex items-center justify-between">
          <ScaleLoader color="#6122e0"></ScaleLoader>
        </div>
      ) : (
        data?.map((result) => (
          <div
            key={result?._id}
            className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 font-semibold rounded-full">
                {result.category}
              </span>
            </div>

            <h2 className="text-xl font-bold mt-3 capitalize">
              {result.habitTitle}
            </h2>

            <p className="text-gray-600 mt-1">{result.description}</p>

            <div className="mt-3 text-sm text-gray-700">
              ⏰ Reminder:{" "}
              <span className="font-semibold">{result.reminderTime}</span>
            </div>

            <div className="mt-2 border-t pt-3 text-sm text-gray-500">
              <p>User: {result.userName}</p>
              <p>Email: {result.userEmail}</p>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => openModal(result)}
                className="flex items-center gap-1 bg-linear-to-r from-purple-500 to-[#00a9ff] text-white px-3 py-2 rounded-lg hover:bg-yellow-500"
              >
                <Pencil size={16} /> Update
              </button>

              <button
                onClick={() => handleDelete(result?._id)}
                className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))
      )}
      <UpdateHabit habit={selectedHabit} refreshData={loadData} />
    </div>
  );
};

export default Myhabit;
