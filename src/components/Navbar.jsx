import { BiSearch } from "react-icons/bi";
import { PiSignInFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../features/toggleMenuSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const hideMenu = location.pathname === "/";
  console.log(hideMenu);
  
  const handleSearch = () => {
    setExpanded(!expanded);
  };

  const handleMenu = () => {
    dispatch(openMenu());
  };

  return (
    <nav className="containerWrap flex justify-between items-center py-6 text-white">
      {hideMenu && (
        <div className="block sm:hidden">
          <button onClick={handleMenu} className="text-2xl cursor-pointer mt-1">
            <FiMenu />
          </button>
        </div>
      )}

      <div className="flex flex-row items-center gap-8">
        <Link to="/" className={`${expanded ? "hidden sm:block" : ""} mr-auto`}>
          <h1 className="uppercase text-lg sm:text-2xl font-black">
            Orion Anime
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-sm items-center flex gap-1 font-bold">
          <input
            type="text"
            placeholder="Search…"
            className={`${
              expanded ? "w-32" : "hidden"
            } text-black px-2 py-[2px] border-y-[1px] border-l-[1px] border-[#666666] rounded-l-lg outline-0 transition-all duration-300`}
          />
          <button className="" onClick={handleSearch}>
            <BiSearch className="text-2xl cursor-pointer" />
          </button>
        </div>
        <a
          href="#"
          className="flex flex-row w-fit capitalize text-sm gap-1 py-2 bg-zinc-900 hover:bg-zinc-800 px-3 items-center transition duration-300 easy-in-out rounded-md"
        >
          <PiSignInFill className="text-2xl" />
          Sign-in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
