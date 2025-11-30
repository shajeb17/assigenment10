import { Link, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Publichabit = () => {
  let [data, setMydata] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/alldata")
      .then((res) => res.json())
      .then((result) => setMydata(result));
  }, []);


  return (
    <div className="w-10/12 m-auto grid grid-cols-3 gap-5 my-7">
      {data?.map((result) => (
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
          <NavLink to={"/habitdetails"} state={result}>
           <button  className="flex btn  items-center gap-1 bg-linear-to-r from-purple-500 to-[#00a9ff] text-white px-3 py-2 rounded-lg hover:bg-yellow-500">
             <Pencil size={16} /> More Details
            </button>
          </NavLink>
   
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publichabit;
