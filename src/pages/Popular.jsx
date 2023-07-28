import { useEffect, useState } from "react";
import { useGetPopularAnimeQuery } from "../features/apiSlice";
import AnimeContent from "../components/AnimeContent";

const Popular = () => {
  const [popularAnimeList, setpopularAnimeList] = useState([]);
  const { data: popularData, isLoading } = useGetPopularAnimeQuery();
  console.log(popularAnimeList);

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
