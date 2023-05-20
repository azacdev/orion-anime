import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Sidebar, Navbar, Main } from "./Index";
import { useLocation, Outlet } from "react-router-dom";
import { selectToggleMenu } from "../app/features/toggleMenuSlice";
import { selectTheme } from "../app/features/themeSlice";
import { fetchFromAPI } from "./utils/fetchFromAPI";

const Root = () => {
  const [searchResult, setSearchResult] = useState([]);
  const toggleMenu = useSelector(selectToggleMenu);
  const theme = useSelector(selectTheme);
  const location = useLocation();

  const searchAnime = async (title) => {
    try {
      const data = await fetchFromAPI(`?&search=${title}`)
      setSearchResult(data.data)
    } catch (error) {
      console.log("Failed to fetch search results", error);
    }
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
