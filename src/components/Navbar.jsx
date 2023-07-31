import { BiSearch } from "react-icons/bi";
import { PiSignInFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../features/toggleMenuSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const hideMenu = location.pathname === "/";

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`animes/search/${searchTerm}`);
    }
    setSearchTerm("");
    setExpanded(!expanded);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchTerm]);

  const handleMenu = () => {
    dispatch(openMenu());
  };

  return (
    <nav className="containerWrap relative flex justify-between items-center py-3 px-2 sm:py-6  sm:px-4 text-white z-10">
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
            Orion <span>Anime</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-sm items-center flex gap-1 font-bold">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search…"
            className={`${
              expanded ? "w-32" : "hidden"
            } text-black px-2 py-[2px] border-y-[1px] border-l-[1px] border-[#666666] rounded-l-sm outline-0 transition-all duration-300`}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-2xl cursor-pointer" onClick={handleSearch}>
            <BiSearch />
          </button>
        </div>
        <a
          href="#"
          className="flex flex-row w-fit capitalize text-sm gap-1 py-1 px-2 items-center"
        >
          <PiSignInFill className="text-2xl" />
          Sign-in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
