import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../features/apiSlice";
import ReactPlayer from "react-player/youtube";
import AnimeDescriptionDetails from "../components/animeDetails/AnimeDescriptionDetails";
import AnimeCharacterDetails from "../components/animeDetails/AnimeCharacterDetails";
import RelatedAnimeDetails from "../components/animeDetails/RelatedAnimeDetails";
import SkeletonDetails from "../components/skeleton/SkeletonDetails";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState([]);
  const { data: animeByIdData } = useGetAnimeByIdQuery(id);

  useEffect(() => {
    if (animeByIdData?.data) {
      setAnimeDetails(animeByIdData.data);
    }
  }, [animeByIdData]);
  console.log(animeDetails);

  const { images, trailer } = animeDetails;

  return (
    <div className="pb-24">
      <div className="containerWrap absolute top-0 left-0 right-0 w-full">
        <img
          src={images?.jpg.small_image_url}
          className="w-full h-24 sm:h-36 lg:h-52 object-cover blur-lg opacity-60 z-0"
        />
      </div>

      <div className="containerWrap relative px-4 z-10">
        <div className="flex flex-col gap-8 mt-4 sm:mt-14 lg:mt-20">
          <AnimeDescriptionDetails animeData={animeDetails} />

          <div className="grid-cols-1 lg:grid-cols-2 grid gap-5">
            {trailer?.embed_url && (
              <div className="flex flex-col gap-3">
                <h1 className="text-base sm:text-xl font-black uppercase">
                  Trailer
                </h1>

                <ReactPlayer
                  className="react-player relative z-2 rounded-md"
                  url={trailer?.embed_url}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            )}
            <AnimeCharacterDetails trailer={trailer} id={id} />
          </div>
          <RelatedAnimeDetails id={id} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
