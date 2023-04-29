import { useState, useEffect, useContext } from 'react';
import { createContext } from 'react';
import SearchIcon from '../search.svg' ;
import { IoIosContact } from "react-icons/io"
import { CgDarkMode } from 'react-icons/cg'
import Sidebar from "./Sidebar"
import { fetchFromAPI } from './utils/fetchFromAPI';
import AnimeCard from './AnimeCard'

export const ThemeContext = createContext(null)


const Root = () => {
  const [theme, setTheme] = useState("dark")
  const [isDarkMode, setisDarkMode] = useState(false)
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"

  const toggleTheme = () => {
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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="container" id={theme}>
        <header className='scroll-bar'>
          <Sidebar />
        </header>

        <main className="section scroll-bar">
          <nav>
            <a href='#' className='nav-icons'>
              <CgDarkMode/>
            </a>

            <div className="search">
              <input
                // value={searchTerm}
                // onChange={(e) => setSeacrhTerm(e.target.value)}
              />
              <img
                src={SearchIcon}
                alt="search"
                // onClick={() => searchMovies(searchTerm)}
              />

            </div>

            <div className='login'>
              <p>LOGIN</p>
              <a href='#' className='nav-icons'>
                <IoIosContact/>
              </a>
            </div>
          </nav>

          <div className="content">
            {animeList.map((item, idx) =>
              (item && <AnimeCard video={item} key={idx}/>)
            )}
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default Root
