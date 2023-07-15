import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import { selectToggleMenu } from "../slices/toggleMenuSlice";
import { fetchFromAPI } from "./utils/fetchAnimeAPI";

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [shouldSearchAnime, setShouldSearchAnime] = useState(false);
  const toggleMenu = useSelector(selectToggleMenu);
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const searchAnime = useCallback(() => {
    fetchFromAPI(`?&search=${title}`)
      .then((data) => setSearchResult(data.data))
      .catch(console.error("error"));
  }, []);

  useEffect(() => {
    if (shouldSearchAnime) {
      searchAnime("");
      setShouldSearchAnime(false);
    }
  }, [shouldSearchAnime]);

  return (
    <div className="App" id={theme}>
      <Sidebar toggleMenu={toggleMenu} setSearchResult={setSearchResult} />
      <main>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchAnime={searchAnime}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        {location.pathname.startsWith("/animes/") ? (
          <Outlet />
        ) : (
          <Home searchResult={searchResult} />
        )}
      </main>
    </div>
  );
};

export default Feed;
