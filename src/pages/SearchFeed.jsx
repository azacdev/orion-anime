import { useParams } from "react-router-dom";
import { useGetSearchAnimeQuery } from "../features/apiSlice";
import { useEffect, useState } from "react";
import AnimeContent from "../components/AnimeContent";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [searchedAnimeList, setSearchedAnimeList] = useState([]);
  const { data: searchData, isLoading } = useGetSearchAnimeQuery(searchTerm);

  useEffect(() => {
    if (searchData?.data) {
      setSearchedAnimeList(searchData.data);
    }
  }, [searchData]);
  console.log(searchedAnimeList);

  return (
    <AnimeContent
      isLoading={isLoading}
      pageTitle={`Search Results for : ${searchTerm}`}
      animeList={searchedAnimeList}
    />
  );
};

export default SearchFeed;
