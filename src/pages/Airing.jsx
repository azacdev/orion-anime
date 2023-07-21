import { useEffect, useState } from "react";
import { useGetAiringAnimeQuery } from "../features/apiSlice";
import AnimeContent from "../components/AnimeContent";

const Airing = () => {
  const [airingAnimeList, setAiringAnimeList] = useState([]);
  const { data: airingData } = useGetAiringAnimeQuery();

  useEffect(() => {
    if (airingData?.data) {
      setAiringAnimeList(airingData.data);
    }
  }, [airingData]);

  return <AnimeContent pageTitle={"Airing"} animeList={airingAnimeList} />;
};

export default Airing;
