import { useEffect, useState } from "react";
import { useGetAnimeCharactersQuery } from "../../features/apiSlice";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AnimeCharacterDetails = ({ trailer, id }) => {
  const [charactersData, setCharactersData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: animeCharactersData } = useGetAnimeCharactersQuery(id);
  useEffect(() => {
    if (animeCharactersData) {
      setCharactersData(animeCharactersData.data);
    }
  }, [animeCharactersData]);

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
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between characters-center items-center">
        <h1 className="text-base sm:text-xl font-black uppercase">
          Characters
        </h1>
        <div className="grid grid-cols-3 text-center">
          <button
            className="flex characters-center text-sm lg:text-base text-zinc-400 hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit"
            onClick={handlePrev}
          >
            <FiChevronLeft className="text-xl mt-[1px]" />
            Left
          </button>
          <p className="text-zinc-50">
            {currentIndex + 1}/{totalPages(totalCharacters)}
          </p>
          <button
            className="flex characters-center text-sm lg:text-base text-zinc-400 hover:text-zinc-50 transition duration-300 easy-in-out hover:underline decoration-dotted underline-offset-4 w-fit"
            onClick={handleNext}
          >
            Right
            <FiChevronRight className="text-xl mt-[1px]" />
          </button>
        </div>
      </div>

      <div
        className={`${
          trailer?.embed_url ? "grid grid-flow-col" : "flex flex-row"
        } characters-carousel gap-4 h-full overflow-hidden`}
      >
        {charactersData.length === 0 ? (
          <p>No characters were found</p>
        ) : (
          charactersData.map((character, id) => (
            <div
              className={`text-left bg-zinc-900 rounded-b-md transition duration-300 easy-in-out z-0 flex flex-col w-44 lg:w-36 h-80`}
              style={{
                transform: `translateX(-${
                  trailer?.embed_url ? currentIndex * 640 : currentIndex * 1280
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
  );
};

export default AnimeCharacterDetails;
