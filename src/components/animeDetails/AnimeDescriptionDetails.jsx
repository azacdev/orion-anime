import React, { useState } from "react";
import { TbLanguageKatakana } from "react-icons/tb";
import { BsStarFill } from "react-icons/bs";

const AnimeDescriptionDetails = ({ animeData }) => {
  const [showTitles, setShowTitles] = useState(false);
  const {
    score,
    images,
    status,
    type,
    year,
    title,
    title_japanese,
    title_synonyms,
    studios,
    episodes,
    duration,
    genres,
    rating,
    source,
    season,
    aired,
    producers,
    synopsis,
  } = animeData;

  const fromDateObj = new Date(aired?.from);
  const toDateObj = new Date(aired?.to);

  const airedFromDate = `${
    fromDateObj.getMonth() + 1
  }/${fromDateObj.getDate()}/${fromDateObj.getFullYear()}`;

  const airedToDate = `${
    toDateObj.getMonth() + 1
  }/${toDateObj.getDate()}/${toDateObj.getFullYear()}`;

  const handleTitles = () => {
    setShowTitles(!showTitles);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-5">
      <div className="flex flex-col gap-5">
        <img
          src={images?.jpg.large_image_url}
          className="object-cover rounded-md sm:rounded-xl w-44 sm:w-full"
          loading="lazy"
          alt="anime-image"
        />
      </div>

      <div className="flex flex-col gap-2 lg:gap-4 justify-start col-span-2 mt-4 sm:mt-12 lg:mt-16">
        <h1 className="text-lg sm:text-2xl lg:text-5xl font-black line-height-3 ">
          {title}
        </h1>
        <div className="flex flex-wrap gap-3 r">
          <div className="px-2 lg:px-4 p-2 flex flex-row justify-center  bg-zinc-800 rounded-md">
            <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
              {type}
            </h1>
          </div>
          <div
            className={` ${
              status === "Currently Airing"
                ? "bg-amber-400"
                : status === "Aired"
                ? "bg-amber-400"
                : "bg-emerald-400"
            } px-2 lg:px-4 p-2 flex flex-row justify-center rounded-md text-zinc-800`}
          >
            <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
              {status}
            </h1>
          </div>
          {score && (
            <div className="px-2 lg:px-4 p-2 flex flex-row justify-center  bg-zinc-800 rounded-md">
              <BsStarFill className="text-xs lg:text-xl mt-[2px] lg:mt-[4px] mr-1" />
              <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
                {score}
              </h1>
            </div>
          )}
          {episodes && (
            <>
              <div className="px-2 lg:px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
                  {episodes} EP.
                </h1>
              </div>
              <div className="px-2 lg:px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
                  x
                </h1>
              </div>
              <div className="px-2 lg:px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                <h1 className="text-xs lg:text-xl uppercase font-black line-height-3">
                  {duration?.slice(0, 2)} Min.
                </h1>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {genres?.map((genre, id) => (
            <React.Fragment key={id}>
              <h1 className="font-black line-height-3 px-2 lg:px-4 p-2 uppercase flex flex-row justify-center characters-center bg-zinc-800 rounded-md text-xs lg:text-xl ">
                {genre.name}
              </h1>
            </React.Fragment>
          ))}
        </div>

        <div>
          <button
            className="text-sm lg:text-base text-zinc-400 flex flex-row gap-1 characters-center hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit"
            onClick={handleTitles}
          >
            <TbLanguageKatakana className="text-sm lg:text-xl" />
            Show alternate titles
          </button>
          <div
            className={`${
              showTitles ? "block" : "hidden"
            } alt-titles flex flex-col`}
          >
            <div className="flex flex-row gap-1">
              <p className="text-sm lg:text-base text-zinc-400">
                Default: <span className="text-zinc-50">{title}</span>
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-sm lg:text-base text-zinc-400">
                Japanese: <span className="text-zinc-50">{title_japanese}</span>
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-sm lg:text-base text-zinc-400">
                Synonyms: <span className="text-zinc-50">{title_synonyms}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-sm lg:text-base text-zinc-400">
            {"Rating: "}
            <span className="text-zinc-50">{rating}</span>
          </p>
          <p className="text-sm lg:text-base text-zinc-400">
            {"Source: "}
            <span className="text-zinc-50">{source}</span>
          </p>
          <p className="text-sm lg:text-base text-zinc-400">
            {"Airing: "}
            <span className="text-zinc-50">{`${airedFromDate} to ${
              !aired?.to ? NaN : airedToDate
            }`}</span>
          </p>
          <p className="text-sm lg:text-base text-zinc-400">
            {"Season: "}
            <span className="text-zinc-50 capitalize">
              {season} {year}
            </span>
          </p>
          <p className="text-sm lg:text-base text-zinc-400">
            {"Studios: "}
            <span className="text-zinc-50">{studios?.[0]?.name}</span>
          </p>
        </div>

        <div className="flex flex-row gap-1">
          <p className="text-sm lg:text-base text-zinc-400">
            {"Producers: "}
            {producers?.map((producer, index) => (
              <React.Fragment key={producer.name}>
                <span className="text-zinc-50">{producer.name}</span>
                {index !== producers.length - 1 ? ", " : null}
              </React.Fragment>
            ))}
          </p>
        </div>
        <p className="text-sm lg:text-base text-zinc-400">
          {"Description: "}
          <span className="text-zinc-50">{synopsis}</span>
        </p>
      </div>
    </div>
  );
};

export default AnimeDescriptionDetails;
