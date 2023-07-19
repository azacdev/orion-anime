import { useEffect, useState } from "react";
import { useGetPopularAnimeQuery } from "../features/apiSlice";
import AnimeCard from "../components/AnimeCard";
import { TbCategory2 } from "react-icons/tb";

const Popular = () => {
  const [popularAnimeList, setpopularAnimeList] = useState([]);
  const { data } = useGetPopularAnimeQuery();
  console.log(popularAnimeList);

  useEffect(() => {
    if (data?.data) {
      setpopularAnimeList(data.data);
    }
  }, [data]);
  return (
    <div className="containerWrap pb-24">
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-xl font-bold  sm:text-xl uppercase">Popular</h1>
        <TbCategory2 className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {popularAnimeList.map((item, idx) => (
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

export default Popular;
