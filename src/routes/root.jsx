import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import SearchIcon from '../search.svg' ;
import Sidebar from "./Sidebar"
import { fetchFromAPI } from './utils/fetchFromAPI';
import AnimeCard from './AnimeCard'

const Root = () => {
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"
  
  useEffect( () => {
    fetchFromAPI(`?&search=${anime}`)
    .then(data => setAnimeList(data.data))
  }, [anime])

  const titles = animeList.map((title) => {
    return title.title
  })

  console.log(titles);

  return (
    <div className="container">
      <nav>
        <a className='logo' href="">Orion <span>Anime</span></a>
        <div className="search">
          <input
            placeholder="search..."
            // value={searchTerm}
            // onChange={(e) => setSeacrhTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            // onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </nav>
      <main className="section">
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className="animes">
          {animeList.map((item, idx) =>
            (item && <AnimeCard video={item} key={idx}/>)
          )}
        </div>
      </main>
    </div>
  )
}

export default Root
