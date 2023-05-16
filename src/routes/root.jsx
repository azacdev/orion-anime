import { useState, useEffect } from 'react';
import { Sidebar, Navbar, Main } from "./";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from '../app/features/animeListSlice';
import { selectToggleMenu } from '../app/features/toggleMenuSlice';
import { selectTheme } from '../app/features/themeSlice';
import { setGenre} from '../app/features/genreSlice';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useLocation, Outlet } from 'react-router-dom';

const Root = () => {
  const dispatch = useDispatch()
  // const [animeList, setAnimeList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const toggleMenu = useSelector(selectToggleMenu)
  const theme = useSelector(selectTheme)
  const genre = useSelector(setGenre)
  const location = useLocation();

  useEffect( () => {
    const data = fetchApiData(genre);
    dispatch(fetchApiData(data))
    // fetchFromAPI(`?&genres=${genre}`)
    // .then(data => setAnimeList(data.data))
    // .catch( console.error('error'))
  }, [genre])

  const searchAnime = (title) => {
    fetchFromAPI(`?&search=${title}`)
    .then(data => setSearchResult(data.data))
  }

  useEffect(() => {
    searchAnime("")
  }, [])
  console.log(genre);
  console.log(searchResult);

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
              // animeList={animeList}
              searchResult={searchResult}
            />
          )}
        </main>
    </div>
  )
}

export default Root