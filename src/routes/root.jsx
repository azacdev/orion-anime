import { useState, useEffect } from "react";
import { Sidebar, Navbar, Main } from "./";
import { useSelector, useDispatch } from "react-redux";
import { selectToggleMenu } from "../app/features/toggleMenuSlice";
import { selectTheme } from "../app/features/themeSlice";
import { setGenre } from "../app/features/genreSlice";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { useLocation, Outlet } from "react-router-dom";
import { fetchApiData } from "../app/features/animeListSlice";
import { useFetchAnimeByGenreQuery } from "../app/features/fetchAnimeApiSlice";

const Root = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([]);
  const toggleMenu = useSelector(selectToggleMenu);
  const theme = useSelector(selectTheme);
  const genre = useSelector(setGenre);
  const location = useLocation();
  
  const { data } = useFetchAnimeByGenreQuery({genre: genre});
  // const animeList = data.data || [];
  useEffect(() => {
    console.log(data);
    // console.log(error);
  });
  
  useEffect(() => {
    dispatch(fetchApiData(genre));
  }, [genre]);

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`).then((data) =>
      setSearchResult(data.data)
    );
  };

  useEffect(() => {
    searchAnime("");
  }, []);
  console.log(genre);

  return (
    <div className={"App"} id={theme}>
      <Sidebar 
        toggleMenu={toggleMenu}
        setSearchResult={setSearchResult} 
      />

      <main 
        className={toggleMenu ? 
        "scroll-bar dim" : 
        "scroll-bar"}>
        <Navbar searchAnime={searchAnime} />

        {location.pathname.startsWith("/animes/") ? (
          <Outlet />
        ) : (
          <Main
            searchResult={searchResult}
          />
        )}
      </main>
    </div>
  );
};

export default Root;
