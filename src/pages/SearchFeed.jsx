import { useParams } from "react-router-dom";
import { useGetSearchAnimeQuery } from "../features/apiSlice";
import { useEffect, useState } from "react";
import AnimeContent from "../components/AnimeContent";

const SearchFeed = () => {
   // fetch and store search anime data
  const { searchTerm } = useParams();
  const [searchedAnimeList, setSearchedAnimeList] = useState([]);
  const { data: searchData, isLoading } = useGetSearchAnimeQuery(searchTerm);

  useEffect(() => {
    if (searchData?.data) {
      setSearchedAnimeList(searchData.data);
    }
  }, [searchData]);

  return (
    <AnimeContent
      isLoading={isLoading}
      pageTitle={`Search Results for : ${searchTerm}`}
      animeList={searchedAnimeList}
    />
  );
};

export default SearchFeed;
