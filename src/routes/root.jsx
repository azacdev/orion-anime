import { useState, useEffect} from 'react';
import {Sidebar, Navbar} from "./"
import { fetchFromAPI } from './utils/fetchFromAPI';
import AnimeCard from './AnimeCard'

const Root = () => {
  const [theme, setTheme] = useState("dark")
  const [toggleMenu, setToggleMenu] = useState(false)
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"

  const toggleDarkMode = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

  // useEffect( () => {
  //   fetchFromAPI(`?&search=${anime}`)
  //   .then(data => setAnimeList(data.data))
  // }, [anime])

  // const titles = animeList.map((title) => {
  //   return title.title
  // })

  // console.log(titles);

  return (
    <div className="container" id={theme}>  
      <Sidebar toggleMenu={toggleMenu}/>
      <main className={toggleMenu ? "scroll-bar dim" : "scroll-bar"} onClick={closeMenu}>
        <Navbar toggleDarkMode={toggleDarkMode}/>


        <div className="content">
          {animeList.map((item, idx) =>
            (item && <AnimeCard video={item} key={idx}/>)
          )}
        </div>
      </main>
    </div>
  )
}

export default Root
