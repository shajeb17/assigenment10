import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { use } from "react";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";

const Navbar = () => {
  let { userInfo, handleSignout } = use(AuthContext);

  let links = (
    <div className="space-x-4 text-[15px] font-semibold text-black/70">
      <NavLink>Home</NavLink>
      <NavLink>Add Habit</NavLink>
      <NavLink> My Habits</NavLink>
      <NavLink>Browse Public Habits</NavLink>
    </div>
  );
  let handleClick = () => {
    handleSignout();
    
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start capitalize ">
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 cursor-pointer">
          {userInfo ? (
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
                    <Link to={"/updateInfo"} className="btn btn-secondary mt-3">
                      Update Information
                    </Link>
                  </div>
                </ul>
              </div>
              <button onClick={handleClick} className="btn  bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white">Sign out</button>
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
    </div>
  );
};

export default Navbar;
