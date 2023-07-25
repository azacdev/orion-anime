import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetRelatedAnimesQuery,
} from "../features/apiSlice";
import { FaArrowLeft } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState([]);
  const [charactersData, setCharctersData] = useState([]);
  const [relatedAnimeData, setRelatedAnimeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: animeByIdData } = useGetAnimeByIdQuery(id);
  const { data: animeCharactersData } = useGetAnimeCharactersQuery(id);
  const { data: animeRelatedData } = useGetRelatedAnimesQuery(id);

  useEffect(() => {
    if (animeByIdData?.data) {
      setAnimeDetails(animeByIdData.data);
    }
    if (animeCharactersData) {
      setCharctersData(animeCharactersData.data);
    }
    if (animeRelatedData) {
      setRelatedAnimeData(animeRelatedData.data);
    }
  }, [animeByIdData, animeCharactersData, animeRelatedData]);
  // console.log(animeDetails);
  console.log(animeRelatedData);
  // console.log(charactersData);

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
    trailer,
  } = animeDetails;

  const fromDateObj = new Date(aired?.from);
  const toDateObj = new Date(aired?.to);

  const airedDate = `${
    fromDateObj.getMonth() + 1
  }/${fromDateObj.getDate()}/${fromDateObj.getFullYear()} to ${
    toDateObj.getMonth() + 1
  }/${toDateObj.getDate()}/${toDateObj.getFullYear()} `;

  const totalCharacters = charactersData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.floor((prevIndex + 1) % totalPages(totalCharacters, false))
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages(totalCharacters - 1, false) : prevIndex - 1
    );
  };

  function totalPages(totalCharacters, isTrailerExist) {
    if (isTrailerExist) {
      return totalCharacters > 4 ? Math.ceil(totalCharacters / 2) : 1;
    } else {
      return totalCharacters > 8 ? Math.ceil(totalCharacters / 4) : 1;
    }
  }

  return (
    <div className="pb-24">
      <div className="absolute top-0 overflow-hidden">
        <img
          src={images?.jpg.small_image_url}
          className="w-screen h-52 object-cover blur-lg opacity-60 z-0"
        />
      </div>

      <div className="containerWrap relative px-4 z-10">
        <div className="flex flex-col gap-8 mt-20">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-5">
              <img
                src={images?.jpg.large_image_url}
                className="object-cover rounded-xl w-full"
                loading="lazy"
                alt="anime-image"
              />
            </div>

            <div className="flex flex-col gap-4 justify-start col-span-2 mt-16">
              <h1 className="text-5xl font-black line-height-3 ">{title}</h1>
              <div className="bg flex flex-row gap-3 characters-center">
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <h1 className="text-xl uppercase font-black line-height-3">
                    {type}
                  </h1>
                </div>
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <h1 className="text-xl uppercase font-black line-height-3">
                    {status}
                  </h1>
                </div>
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <BsStarFill className="text-lg mr-1" />
                  <h1 className="text-xl uppercase font-black line-height-3">
                    {score}
                  </h1>
                </div>
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <h1 className="text-xl uppercase font-black line-height-3">
                    {episodes} EP.
                  </h1>
                </div>
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <h1 className="text-xl uppercase font-black line-height-3">
                    x
                  </h1>
                </div>
                <div className="px-4 p-2 flex flex-row justify-center characters-center bg-zinc-800 rounded-md">
                  <h1 className="text-xl uppercase font-black line-height-3">
                    {duration?.slice(0, 2)} Min.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row gap-3">
                {genres?.map((genre, id) => (
                  <React.Fragment key={id}>
                    <h1 className="font-black line-height-3 px-3 p-2 uppercase flex flex-row justify-center characters-center bg-zinc-800 rounded-md text-xl ">
                      {genre.name}
                    </h1>
                  </React.Fragment>
                ))}
              </div>

              <div>
                <button className="text-zinc-400 flex flex-row gap-1 characters-center hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit">
                  Show alternate titles
                </button>
                <div className="alt-titles flex flex-col">
                  <div className="flex flex-row gap-1">
                    <p className="text-zinc-400">
                      Default: <span className="text-zinc-50">{title}</span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <p className="text-zinc-400">
                      Japanese:{" "}
                      <span className="text-zinc-50">{title_japanese}</span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <p className="text-zinc-400">
                      Synonyms:{" "}
                      <span className="text-zinc-50">{title_synonyms}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-zinc-400">
                  {"Rating: "}
                  <span className="text-zinc-50">{rating}</span>
                </p>
                <p className="text-zinc-400">
                  {"Source: "}
                  <span className="text-zinc-50">{source}</span>
                </p>
                <p className="text-zinc-400">
                  {"Airing: "}
                  <span className="text-zinc-50">{airedDate}</span>
                </p>
                <p className="text-zinc-400">
                  {"Season: "}
                  <span className="text-zinc-50 capitalize">
                    {season} {year}
                  </span>
                </p>
                <p className="text-zinc-400">
                  {"Studios: "}
                  <span className="text-zinc-50">{studios?.[0].name}</span>
                </p>
              </div>

              <div className="flex flex-row gap-1">
                <p className="text-zinc-400">
                  {"Producers: "}
                  {producers?.map((producer, index) => (
                    <React.Fragment key={producer.name}>
                      <span className="text-zinc-50">{producer.name}</span>
                      {index !== producers.length - 1 ? ", " : null}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <p className="text-zinc-400">
                {"Description: "}
                <span className="text-zinc-50">{synopsis}</span>
              </p>
            </div>
          </div>

          <div className="grid-cols-2 grid gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-black uppercase">Trailer</h1>
              {/* <iframe
                src={trailer?.embed_url}
                frameborder="0"
                className="relative w-full h-80 z-2 rounded-md"
                loading="lazy"
              ></iframe> */}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between characters-center">
                <h1 className="text-xl font-black uppercase">Characters</h1>
                <div className="grid grid-cols-3 text-center">
                  <button
                    className="flex characters-center text-zinc-400 hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit"
                    onClick={handlePrev}
                  >
                    <FiChevronLeft className="text-xl mt-[1px]" />
                    Left
                  </button>
                  <p className="text-zinc-50">
                    {currentIndex + 1}/{totalPages(totalCharacters)}
                  </p>
                  <button
                    className="flex characters-center text-zinc-400 hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit"
                    onClick={handleNext}
                  >
                    Right
                    <FiChevronRight className="text-xl mt-[1px]" />
                  </button>
                </div>
              </div>

              <div className="grid grid-flow-col characters-carousel gap-4 h-full overflow-hidden">
                {charactersData.length === 0 ? (
                  <p>No characters were found</p>
                ) : (
                  charactersData.map((character, id) => (
                    <div
                      className="character-capsule text-left bg-zinc-900 rounded-b-md transition duration-300 easy-in-out z-0 flex flex-col w-36 h-80"
                      style={{
                        transform: `translateX(-${
                          trailer?.embed_url
                            ? currentIndex * 640
                            : currentIndex * 1280
                        }px)`,
                      }}
                      key={id}
                    >
                      <img
                        src={character?.character?.images?.jpg.image_url}
                        alt="characters-image"
                        className="relative w-full h-full max-h-64 rounded-t-md object-cover"
                      />
                      <p className="text-sm p-3 rounded-md">
                        {character?.character?.name}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-black uppercase">Related</h1>
            <div className="flex flex-row flex-wrap gap-3">
              {relatedAnimeData?.map((relData, id) => (
                <div
                  className="w-fit justify-between bg-zinc-900 p-3 px-5 rounded-lg flex flex-row items-center gap-5 hover:bg-zinc-800 duration-300 ease-in-out transition-all"
                  key={id}
                >
                  SVG
                  <div>
                    <div className="flex flex-row gap-1 items-center">
                      <p className="text-xs uppercase text-zinc-400">
                        {relData.relation}
                      </p>
                      <p className="text-xs text-zinc-400">•</p>
                      <p className="text-xs uppercase text-zinc-400">
                        {relData.entry[0].type}
                      </p>
                    </div>
                    <p className="font-bold">{relData.entry[0].name}</p>
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
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
