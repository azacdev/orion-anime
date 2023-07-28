import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const AnimeCard = ({
  animeData: { mal_id, score, images, status, type, year, title, studios },
}) => {
  return (
    <div className="group relative text-left rounded-lg transition duration-300 ease-in-out z-0 flex flex-col justify-between h-[22rem] overflow-hidden">
      <div className="translate-x-0 flex flex-row absolute p-1 pl-2 pr-3.5 mt-2 justify-center group-hover:-translate-x-24 bg-zinc-900 rounded-r-lg duration-300 ease-in-out transition-all">
        <BsStarFill className="text-lg mt-1 mr-1" />
        <h1 className="text-lg uppercase">{score}</h1>
      </div>
      <Link
        to={mal_id && `/animes/${mal_id}`}
        className="group-hover:h-full transition-all duration-300 ease-in-out"
      >
        <img
          src={images.jpg.large_image_url}
          className="h-full w-full rounded-t-lg object-cover"
          
          alt="anime-image"
        />
      </Link>
      <div className="group-hover:translate-y-24 transition-all duration-300 ease-in-out">
        <div className="translate-y-0 absolute bottom-0 p-3 flex flex-col grow gap-1 bg-zinc-900 hover:bg-zinc-800 rounded-b-md w-full transition-all duration-300 ease-in-out">
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
    </div>
  );
};

export default AnimeCard;
