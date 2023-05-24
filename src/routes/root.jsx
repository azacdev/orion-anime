import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
import Main from "./Main"
import { useLocation, Outlet } from "react-router-dom";
import { selectToggleMenu } from "../app/features/toggleMenuSlice";
import { selectTheme } from "../app/features/themeSlice";
import { selectSearchTerm } from "../app/features/searchTermSlice";
import {fetchFromAPI} from "./fetchFromAPI";

const Root = () => {
  const searchTerm = useSelector(selectSearchTerm)
  const [searchResult, setSearchResult] = useState([]);
  const toggleMenu = useSelector(selectToggleMenu);
  const theme = useSelector(selectTheme);
  const location = useLocation();

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
    .catch( console.error('error'))
  }
  console.log(searchTerm);

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
