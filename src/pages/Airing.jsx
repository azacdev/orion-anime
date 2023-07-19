import { useEffect, useState } from "react";
import { useGetAiringAnimeQuery } from "../features/apiSlice";
import AnimeCard from "../components/AnimeCard";
import { TbCategory2 } from "react-icons/tb";

const Airing = () => {
  const [airingAnimeList, setAiringAnimeList] = useState([]);
  const { data: getAiring } = useGetAiringAnimeQuery();

  useEffect(() => {
    if (getAiring?.data) {
      setAiringAnimeList(getAiring.data);
    }
  }, [getAiring]);
  console.log(airingAnimeList);

  return (
    <div className="containerWrap pb-24">
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-lg font-bold sm:text-xl uppercase">Top 100</h1>
        <TbCategory2 className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {airingAnimeList.map((item, idx) => (
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

export default Airing;
