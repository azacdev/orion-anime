import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Sidebar, Navbar, Main } from "./Index";
import { useLocation, Outlet } from "react-router-dom";
import { selectToggleMenu } from "../app/features/toggleMenuSlice";
import { selectTheme } from "../app/features/themeSlice";
import { useFetchAnimeByGenreQuery } from "../app/features/fetchAnimeApiSlice";
import { setGenre } from "../app/features/genreSlice";
import { selectedGenre } from '../app/features/genreSlice';

import { fetchFromAPI } from "./utils/fetchFromAPI";

const Root = () => {
  const dispatch = useDispatch()
  const genre = useSelector(setGenre)
  const [searchResult, setSearchResult] = useState([]);
  const toggleMenu = useSelector(selectToggleMenu);
  const theme = useSelector(selectTheme);
  const location = useLocation();

  
  const searchAnime = (title) => {
    const { data } = useFetchAnimeByGenreQuery({params: `&search=${search}`})
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
  }

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
  }

  useEffect(() => {
    searchAnime("");
  }, []);

  return (
    <div className="App" id={theme}>
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
