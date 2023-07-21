import { useEffect, useState } from "react";
import { useGetUpcomingAnimeQuery } from "../features/apiSlice";
import AnimeContent from "../components/AnimeContent";

const Upcoming = () => {
  const [upcomingAnimeList, setUpcomingAnimeList] = useState([]);
  const { data: upcomingData } = useGetUpcomingAnimeQuery();
  console.log(upcomingAnimeList);

  useEffect(() => {
    if (upcomingData?.data) {
      setUpcomingAnimeList(upcomingData.data);
    }
  }, [upcomingData]);

  return (
    <AnimeContent pageTitle={"Upcoming"} animeList={upcomingAnimeList} />
  );
};

export default Upcoming;
