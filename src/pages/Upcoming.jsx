import React, { useEffect, useState } from "react";
import { useGetUpcomingAnimeQuery } from "../features/apiSlice";
import { TbCategory2 } from "react-icons/tb";
import AnimeCard from "../components/AnimeCard";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Upcoming = () => {
  const [upcomingAnimeList, setUpcomingAnimeList] = useState([]);
  const { data: getUpcoming } = useGetUpcomingAnimeQuery();
  console.log(upcomingAnimeList);

  useEffect(() => {
    if (getUpcoming?.data) {
      setUpcomingAnimeList(getUpcoming.data);
    }
  }, [getUpcoming]);
  
  return (
    <div className="containerWrap pb-24">
      <Link to="/" className="flex items-start text-2xl py-2 sm:py-6">
        <FaArrowLeft />
      </Link>
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-xl font-bold sm:text-xl uppercase">Upcoming</h1>
        <TbCategory2 className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {upcomingAnimeList.map((item, idx) => (
          <div
            key={idx}
            className="relative text-left rounded-lg transition duration-300 easy-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden"
          >
            {item && <AnimeCard animeData={item} />}
          </div>
        ))}
      </div>

      <div className="flex justify-between py-10">
        <button className="flex flex-row w-fit text-sm gap-1 py-2 bg-zinc-900 hover:bg-zinc-800 px-5 items-center transition duration-300 easy-in-out rounded-md">
          <FiChevronLeft />
          Prev Page
        </button>
        <button className="flex flex-row w-fit text-sm gap-1 py-2 bg-zinc-900 hover:bg-zinc-800 px-5 items-center transition duration-300 easy-in-out rounded-md">
          Next Page
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
