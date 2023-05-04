import { useState, useEffect} from 'react';
import {Sidebar, Navbar, Main} from "./";
import { fetchFromAPI } from './utils/fetchFromAPI';

const Root = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])

  useEffect( () => {
    fetchFromAPI(`?&genres=${selectedGenre}`)
    .then(data => setAnimeList(data.data))
  }, [selectedGenre])

  return (
    <div className="App" id={theme}>
        <Sidebar 
          toggleMenu={toggleMenu}
          selectedGenre={selectedGenre} 
          setSelectedGenre={setSelectedGenre}
        />
        <main className="scroll-bar">
          <Navbar 
            theme={theme} 
            setTheme={setTheme} 
            setToggleMenu={setToggleMenu}
          />
          <Main animeList={animeList}/>
        </main>
    </div>
  )
}

export default Root