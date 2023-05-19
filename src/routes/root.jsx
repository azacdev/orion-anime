import { useState, useEffect } from "react";
import { Sidebar, Navbar, Main } from "./Index";
import { useSelector } from "react-redux";
import { selectToggleMenu } from "../app/features/toggleMenuSlice";
import { selectTheme } from "../app/features/themeSlice";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { useLocation, Outlet } from "react-router-dom";

const Root = () => {
  const [searchResult, setSearchResult] = useState([]);
  const toggleMenu = useSelector(selectToggleMenu);
  const theme = useSelector(selectTheme);
  const location = useLocation();

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then((data) => setSearchResult(data.data))
  };

  useEffect(() => {
    searchAnime("");
  }, []);

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
