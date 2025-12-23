import { Link, Pencil, Trash2 } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../uesContextHook/formhook/AuthContex";

const Publichabit = () => {
  let [data, setMydata] = useState();
  let [loadding, setLoadding] = useState(true);
    let { userInfo } = use(AuthContext);
  useEffect(() => {
    if(!userInfo?.accessToken) return
    fetch("http://localhost:3000/alldata",{
      headers:{
        authorization:`Bearer ${userInfo?.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((result) => (setMydata(result), setLoadding(false)));
  }, [userInfo]);
  let handleclick=(e)=>{
    e.preventDefault()
    let search=e.target.search.value
    fetch(`http://localhost:3000/search?search=${search}`)
    .then(res=>res.json())
    .then(result=>setMydata(result))
    
  }

  
  return (
    <div>
      <form className="mt-10 text-center rounded-full" onSubmit={handleclick}>
        <label className="input rounded-full outline-0 w-[350px]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="search"  placeholder="Search" />
          <button className="absolute -right-1 btn rounded-full bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white">
            Search
          </button>
        </label>
      </form>
      <div className="w-10/12 m-auto grid grid-cols-3 gap-5 my-7 max-[900px]:grid-cols-2 max-[630px]:grid-cols-1">
        {loadding === true ? (
          <div className="w-full flex items-center justify-center">
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
                <NavLink to={"/habitdetails"} state={result}>
                  <button className="flex btn  items-center gap-1 bg-linear-to-r from-purple-500 to-[#00a9ff] text-white px-3 py-2 rounded-lg hover:bg-yellow-500">
                    <Pencil size={16} /> More Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Publichabit;
