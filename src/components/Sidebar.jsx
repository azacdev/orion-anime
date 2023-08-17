import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, selectToggleMenu } from "../features/toggleMenuSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const toggleMenu = useSelector(selectToggleMenu);

  // toggle sidemenu
  const handleMenu = () => {
    dispatch(openMenu());
  };

  return (
    <aside
      className={`${
        toggleMenu ? "translate-x-0" : "-translate-x-full"
      } h-screen w-4/6 pt-7 p-2 sm:p-0 bg-[#1C1C1C] fixed top-0 left-0 sm:relative sm:translate-x-0 sm:top-0 sm:left-0 sm:w-full sm:bg-transparent basis-1/3 flex flex-col gap-3 z-10 duration-300 easy-in-out transition-all`}
    >
      <div className="sm:hidden">
        <button onClick={handleMenu} className="text-2xl cursor-pointer">
          <CgClose />
        </button>
      </div>

      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-xl font-bold uppercase">Categories </h1>
        <TbCategory2 className="text-2xl" />
      </div>

      <Link
        to="/anime/top"
        className="rounded-md from-zinc-900 to-zinc-900/70 hover:from-zinc-800 hover:to-zinc-800/70 flex bg-gradient-to-r p-2 h-12 w-full justify-between items-center cursor-pointer"
      >
        <h1 className="text-base font-black uppercase">Top 100</h1>
        <FaArrowRight className="cursor-pointer" />
      </Link>

      <Link
        to="/anime/popular"
        className="rounded-md from-zinc-900 to-zinc-900/70 hover:from-zinc-800 hover:to-zinc-800/70 flex bg-gradient-to-r p-2 h-12 w-full justify-between items-center cursor-pointer"
      >
        <h1 className="text-base font-black uppercase">Popular</h1>
        <FaArrowRight className="cursor-pointer" />
      </Link>

      <Link
        to="/anime/airing"
        className="rounded-md from-zinc-900 to-zinc-900/70 hover:from-zinc-800 hover:to-zinc-800/70 flex bg-gradient-to-r p-2 h-12 w-full justify-between items-center cursor-pointer"
      >
        <h1 className="text-base font-black uppercase">Airing</h1>
        <FaArrowRight className="cursor-pointer" />
      </Link>

      <Link
        to="/anime/upcoming"
        className="rounded-md from-zinc-900 to-zinc-900/70 hover:from-zinc-800 hover:to-zinc-800/70 flex bg-gradient-to-r p-2 h-12 w-full justify-between items-center cursor-pointer"
      >
        <h1 className="text-base font-black uppercase">Upcoming</h1>
        <FaArrowRight className="cursor-pointer" />
      </Link>
    </aside>
  );
};

export default Sidebar;
