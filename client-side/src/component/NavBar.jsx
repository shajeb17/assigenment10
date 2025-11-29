import { NavLink } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
    let links=<div className="space-x-4 text-[15px] font-semibold text-black/70">
       <NavLink>Home</NavLink>
       <NavLink>Add Habit</NavLink>
       <NavLink> My Habits</NavLink>
       <NavLink>Browse Public Habits</NavLink>
    </div>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start capitalize ">
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white font-semibold px-9 py-4">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
