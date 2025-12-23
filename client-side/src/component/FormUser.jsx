import React, { use } from "react";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";
import { PulseLoader } from "react-spinners";

const FormUser = () => {
  let { userInfo, handleSignout, loading } = use(AuthContext);
  let handleClick = () => {
    handleSignout();
  };
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        {loading ? (
          <div>
            <PulseLoader color="#6122e0" size={10} />
          </div>
        ) : userInfo ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="">
                <img
                  src={userInfo?.photoURL}
                  className="w-[35px] h-[35px] object-cover rounded-full"
                />
              </div>
              <ul
                tabIndex="1"
                className="dropdown-content menu rounded-box z-1 mt-5 w-[200px] ml-[-50px] bg-black/80 p-2 shadow-sm text-white"
              >
                <div>
                  <div className="flex"> Name :{userInfo.displayName}</div>
                  <div className="flex"> Email :{userInfo?.email}</div>
                  <button
                    onClick={handleSignout}
                    className="bg-linear-to-r from-purple-500 to-[#00a9ff] w-full text-[15px] font-semibold rounded py-1.5 mt-2"
                  >
                    Log out
                  </button>
                </div>
              </ul>
            </div>
            <button
              onClick={handleClick}
              className="btn  bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            to={"login"}
            className="btn bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white font-semibold px-9 py-4"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default FormUser;
