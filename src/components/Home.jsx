import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import {
  useGetAiringAnimeQuery,
  useGetUpcomingAnimeQuery,
} from "../features/apiSlice";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const [airingList, setAnimeList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const { data: getAiring } = useGetAiringAnimeQuery();
  const { data: getUpcoming } = useGetUpcomingAnimeQuery();

  useEffect(() => {
    if (getAiring?.data) {
      setAnimeList(getAiring.data);
    }
    if (getUpcoming?.data) {
      setUpcomingList(getUpcoming.data);
    }
  }, [getAiring, getUpcoming]);
  console.log(airingList);

  return (
    <div className="flex flex-col w-full col-span-2">
      <div>
        <div className="flex flex-row items-center justify-between px-1 py-3">
          <h1 className="text-xl font-bold uppercase">Currently Airing</h1>
          <Link to="/anime/airing">
            <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {airingList.slice(0, 8).map((item, idx) => (
            <div
              key={idx}
              className="relative text-left rounded-lg transition duration-300 easy-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden"
            >
              {item && <AnimeCard animeData={item} />}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 pb-24">
        <div className="flex flex-row items-center justify-between px-1 py-3">
          <h1 className="text-xl font-bold uppercase">Upcoming</h1>
          <Link to="/anime/upcoming">
            <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {upcomingList.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="relative text-left rounded-lg transition duration-300 easy-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden"
            >
              {item && <AnimeCard animeData={item} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
