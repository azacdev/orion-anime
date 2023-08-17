import { useEffect, useState } from "react";
import { useGetPopularAnimeQuery } from "../features/apiSlice";
import AnimeContent from "../components/AnimeContent";

const Popular = () => {
  // fetch and store popular anime
  const [popularAnimeList, setpopularAnimeList] = useState([]);
  const { data: popularData, isLoading } = useGetPopularAnimeQuery();

  useEffect(() => {
    if (popularData?.data) {
      setpopularAnimeList(popularData.data);
    }
  }, [popularData]);

  return (
    <AnimeContent
      isLoading={isLoading}
      pageTitle={"Popular"}
      animeList={popularAnimeList}
    />
  );
};

export default Popular;
