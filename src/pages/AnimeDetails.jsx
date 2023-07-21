import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../features/apiSlice";
import { FaArrowLeft } from "react-icons/fa";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setanimeDetails] = useState([]);
  const { data: animeByIdData } = useGetAnimeByIdQuery(id);

  useEffect(() => {
    if (animeByIdData?.data) {
      setanimeDetails(animeByIdData.data);
    }
  }, [animeByIdData]);
  console.log(animeDetails);

  const { score, images, status, type, year, title, studios } = animeDetails;

  return (
    <div className="pb-24">
      <div className="absolute top-0 overflow-hidden">
        <img
          src={images?.jpg.small_image_url}
          className="w-screen h-52 object-cover blur-lg opacity-60 z-0"
        />
      </div>

      <div className="containerWrap relative px-4 z-10">
        <Link to="/" className="flex items-start text-2xl py-2 sm:py-6">
          <FaArrowLeft />
        </Link>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-5">
              <img
                src={images?.jpg.large_image_url}
                className="object-cover rounded-xl w-52"
                loading="lazy"
                alt="anime-image"
              />
            </div>

            <div className="flex flex-col gap-4 justify-start col-span-2 mt-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
