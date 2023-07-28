import { useEffect, useState } from "react";
import { useGetRelatedAnimesQuery } from "../features/apiSlice";
import { FiArrowUpRight } from "react-icons/fi";
import { BiBookAlt, BiSolidMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const RelatedAnimeDetails = ({ id }) => {
  const [relatedAnimeData, setRelatedAnimeData] = useState([]);
  const { data: animeRelatedData } = useGetRelatedAnimesQuery(id);

  useEffect(() => {
    if (animeRelatedData) {
      setRelatedAnimeData(animeRelatedData.data);
    }
  }, [animeRelatedData]);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-base sm:text-xl font-black uppercase">Related</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {relatedAnimeData?.map((relData, id) => (
          <div
            className="w-fit justify-between bg-zinc-900 p-3 px-5 rounded-lg flex flex-row items-center gap-5 hover:bg-zinc-800 duration-300 ease-in-out transition-all"
            key={id}
          >
            {relData.relation === "Adaptation" ? (
              <BiBookAlt className="text-lg lg:text-2xl" />
            ) : (
              <BiSolidMoviePlay className="text-lg lg:text-2xl" />
            )}
            <div>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-xs uppercase lg:text-sm text-zinc-400">
                  {relData.relation}
                </p>
                <p className="text-xs lg:text-sm text-zinc-400">•</p>
                <p className="text-xs uppercase lg:text-sm  text-zinc-400">
                  {relData.entry[0].type}
                </p>
              </div>
              <p className="text-xs lg:text-sm font-bold ">
                {relData.entry[0].name}
              </p>
            </div>
            {relData.entry[0].type === "anime" && (
              <Link to={`/animes/${relData.entry[0].mal_id}`}>
                <FiArrowUpRight className="text-2xl" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedAnimeDetails;
