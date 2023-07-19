import React, { useEffect, useState } from "react";
import { useGetUpcomingAnimeQuery } from "../features/apiSlice";
import { TbCategory2 } from "react-icons/tb";
import AnimeCard from "../components/AnimeCard";

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
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-xl font-bold sm:text-xl uppercase">Upcoming</h1>
        <TbCategory2 className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {upcomingAnimeList.map((item, idx) => (
          <div
            key={idx}
            className="relative text-left rounded-lg transition duration-300 easy-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden"
          >
            {item && <AnimeCard animeData={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
