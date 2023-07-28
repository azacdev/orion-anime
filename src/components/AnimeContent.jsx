import React from "react";
import { TbCategory2 } from "react-icons/tb";
import AnimeCard from "../components/AnimeCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SkeletonCard from "./SkeletonCard";

const AnimeContent = ({isLoading, pageTitle, animeList }) => {
  return (
    <div className="containerWrap px-4 pb-24">
      <div className="flex flex-row items-center justify-between px-1 py-3">
        <h1 className="text-xl font-bold sm:text-xl uppercase">{pageTitle}</h1>
        <TbCategory2 className="text-2xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {isLoading && <SkeletonCard cards={25} />}
        {animeList.map((item, idx) => (
          <React.Fragment key={idx}>
            {item && <AnimeCard animeData={item} />}
          </React.Fragment>
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

export default AnimeContent;
