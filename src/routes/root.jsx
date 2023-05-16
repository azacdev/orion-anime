import { useState, useEffect} from 'react';
import {Sidebar, Navbar, Main} from "./";
import {useSelector, useDispatch} from "react-redux";
import { selectToggleMenu } from '../app/features/toggleMenuSlice';
import { selectTheme } from '../app/features/themeSlice';
import { setgenre} from '../app/features/genreSlice';
import { selectSearchTerm } from '../app/features/searchTermSlice';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useLocation, Outlet } from 'react-router-dom';

const Root = () => {
  const [animeList, setAnimeList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const toggleMenu = useSelector(selectToggleMenu)
  const theme = useSelector(selectTheme)
  const genre = useSelector(setgenre)
  const searchTerm = useSelector(selectSearchTerm)
  const location = useLocation();

  useEffect( () => {
    fetchFromAPI(`?&genres=${genre}`)
    .then(data => setAnimeList(data.data))
    .catch( console.error('error'))
  }, [genre])

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
  }

  useEffect(() => {
    searchAnime("")
  }, [])
  console.log(searchResult);
  console.log(searchTerm);

  return (
    <div className={"App"} id={theme}>
        <Sidebar 
          toggleMenu={toggleMenu}
          setSearchResult={setSearchResult}
        />

        <main className={ toggleMenu ? "scroll-bar dim" : "scroll-bar"}>
          <Navbar 
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