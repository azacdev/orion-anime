import { useState, useEffect} from 'react';
import {Sidebar, Navbar, Main} from "./";
import {useSelector, useDispatch} from "react-redux"
import { handleMenu } from '../app/features/toggleMenuSlice';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useLocation, Outlet } from 'react-router-dom';

const Root = () => {
  const toggleMenu = useSelector((state) => state.toggleMenu.toggleMenu)
  const dispatch = useDispatch()
  // const [toggleMenu, setToggleMenu] = useState(false)
  const [theme, setTheme] = useState("dark")
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
    <div className="App" id={theme}>
        <Sidebar 
          toggleMenu={toggleMenu}
          selectedGenre={selectedGenre} 
          setSelectedGenre={setSelectedGenre}
          setSearchResult={setSearchResult}
        />

        <main className={ toggleMenu ? "scroll-bar dim" : "scroll-bar"}>
          <Navbar 
            theme={theme} 
            setTheme={setTheme} 
            // setToggleMenu={setToggleMenu}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchAnime={searchAnime}
          />

          {location.pathname.startsWith('/animes/') ? (
            <Outlet />
            ) : (
            <Main 
              animeList={animeList}
              searchResult={searchResult}
            />
          )}

        <div id="anime-detail">
          
        </div>
        </main>
    </div>
  )
}

export default Root