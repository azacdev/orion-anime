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
      <div className="containerWrap px-4">
        <Link to="/" className="flex items-start text-2xl py-2 sm:py-6">
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default AnimeDetails;
