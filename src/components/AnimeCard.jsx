import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const AnimeCard = ({
  animeData: { mal_id, score, images, status, type, year, title, studios },
}) => {
  
  return (
    <>
      <div className="flex flex-row absolute p-1 pl-2 pr-3.5 mt-2 justify-center bg-zinc-900 rounded-r-lg duration-200 easy-in-out transition-all">
        <BsStarFill className="text-lg mt-1 mr-1" />
        <h1 className="text-lg uppercase">{score}</h1>
      </div>
      <Link to={mal_id && `/animes/${mal_id}`}>
        <img
          src={images.jpg.large_image_url}
          className="h-full w-full hover:h-[22rem] rounded-t-lg transition-all duration-200 ease-in-out object-cover"
          loading="lazy"
          alt="anime-image"
        />
      </Link>
      <div className="w-full">
        <div className="translate-y-0 absolute bottom-0 p-3 flex flex-col grow gap-1 bg-zinc-900 hover:bg-zinc-800 rounded-b-md w-full transition-all duration-200 ease-in-out">
          <div className="flex flex-row items-center gap-1 text-zinc-400 text-xs">
            <p>{status}</p>
            <p>•</p>
            <p>{type}</p>
            <p>•</p>
            <p>{year}</p>
          </div>
          <p className="line-clamp-1 text-sm grow font-bold">{title}</p>
          <p className="text-zinc-400 text-xs">{studios[0]?.name}</p>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
