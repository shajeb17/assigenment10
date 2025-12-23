import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import FormUser from "./FormUser";


const Navbar = () => {

  let links = (
    <div className="space-x-4 text-[15px] font-semibold darkmode:text-white text-black/70">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"addhabit"}>Add Habit</NavLink>
      <NavLink to={"myhabit"}> My Habits</NavLink>
      <NavLink to={"publichabit"}>Browse Public Habits</NavLink>
    </div>
  );
  return (
    <div className="px-5 py-2.5 flex justify-between items-center bg-base-100 shadow-sm max-[875px]:flex-col max-[875px]:items-center ">
      <div className="max-[875px]:flex  max-[875px]:justify-between max-[875px]:w-full max-[420px]:flex-col max-[420px]:items-center">
        <Link to={"/"} className=" capitalize ">
          <Logo></Logo>
        </Link>
        <div className="min-[875px]:hidden">
          <FormUser></FormUser>
        </div>
      </div>

      <div className="r flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="max-[875px]:hidden">
        <FormUser></FormUser>
      </div>
    </div>
  );
};

export default Navbar;
