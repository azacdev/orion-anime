import { useState, useEffect, useContext } from 'react';
import SearchIcon from '../search.svg' ;
import { IoIosContact } from "react-icons/io"
import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi"
import Sidebar from "./Sidebar"
import { fetchFromAPI } from './utils/fetchFromAPI';
import AnimeCard from './AnimeCard'

const Root = () => {
  const [theme, setTheme] = useState("dark")
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
      <header className='scroll-bar'>
        <Sidebar />
      </header>

      <main className="section scroll-bar">
        <nav>
          <button className='btn menu-btn'><BiMenuAltLeft/></button>

          <button className='btn nav-icons' onClick={toggleDarkMode}>
            {theme === "dark" ? <BiBrightnessHalf/> : <BiBrightness/>}
          </button>

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

          <button>
            <a href='#' className='login'>
              <p>LOGIN</p>
              <span className='btn nav-icons'><IoIosContact/></span>
            </a>
          </button>
        </nav>

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
