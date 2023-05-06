import { useState, useEffect} from 'react';
import {Sidebar, Navbar, Main} from "./";
import { fetchFromAPI } from './utils/fetchFromAPI';

const Root = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

        <main className="scroll-bar">
          <Navbar 
            theme={theme} 
            setTheme={setTheme} 
            setToggleMenu={setToggleMenu}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchAnime={searchAnime}
          />

          <Main 
            animeList={animeList}
            searchResult={searchResult}
          />
        </main>
    </div>
  )
}

export default Root