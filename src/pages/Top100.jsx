import { useEffect, useState } from "react";
import { useGetTopAnimeQuery } from "../features/apiSlice";
import AnimeContent from "../components/AnimeContent";

const Top100 = () => {
   // fetch and store top 100 anime
  const [topAnimeList, setTopAnimeList] = useState([]);
  const { data: top100Data, isLoading } = useGetTopAnimeQuery();

  useEffect(() => {
    if (top100Data?.data) {
      setTopAnimeList(top100Data.data);
    }
  }, [top100Data]);

  return (
    <AnimeContent
      isLoading={isLoading}
      pageTitle={"Top 100"}
      animeList={topAnimeList}
    />
  );
};

export default Top100;
