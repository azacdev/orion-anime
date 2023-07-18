import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import { useGetPopularAnimeQuery } from "../features/apiSlice";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const { data } = useGetPopularAnimeQuery()
  
  useEffect(() => {
    if (data?.data) {
      setAnimeList(data.data);
    }
  }, [data]);

  return (
    <div className="flex flex-col w-full col-span-2">
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-2xl uppercase">Ongoing</h1>
        <FiArrowUpRight className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {animeList?.map((item, idx) => (
          <div key={idx} className="relative text-left rounded-lg transition duration-300 easy-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden">
            {item && <AnimeCard animeData={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
