import { useState, useEffect} from 'react';
import {Sidebar, Navbar, Main} from "./";
import {useSelector, useDispatch} from "react-redux";
import { selectToggleMenu } from '../app/features/toggleMenuSlice';
import { selectTheme } from '../app/features/themeSlice';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useLocation, Outlet } from 'react-router-dom';

const Root = () => {
  const toggleMenu = useSelector(selectToggleMenu)
  const theme = useSelector(selectTheme)
  // const [theme, setTheme] = useState("dark")
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const location = useLocation();

  useEffect( () => {
    fetchFromAPI(`?&genres=${selectedGenre}`)
    .then(data => setAnimeList(data.data))
    .catch( console.error('error'))
  }, [selectedGenre])

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
  }

  useEffect(() => {
    searchAnime("")
  }, [])

  console.log(searchResult);

  return (
    <div className={"App"} id={theme}>
        <Sidebar 
          toggleMenu={toggleMenu}
          selectedGenre={selectedGenre} 
          setSelectedGenre={setSelectedGenre}
          setSearchResult={setSearchResult}
        />

        <main className={ toggleMenu ? "scroll-bar dim" : "scroll-bar"}>
          <Navbar 
            // theme={theme} 
            // setTheme={setTheme} 
            // setToggleMenu={setToggleMenu}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchAnime={searchAnime}
          />

          {location.pathname.startsWith('/animes/') ? 
          ( <Outlet />) 
          : 
          ( <Main 
              animeList={animeList}
              searchResult={searchResult}
            />
          )}
        </main>
    </div>
  )
}

export default Root