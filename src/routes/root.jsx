import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import SearchIcon from '../search.svg' ;
import { fetchFromAPI } from './utils/fetchFromAPI';
import AnimeCard from './AnimeCard'

const Root = () => {
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"
  
  useEffect( () => {
  
    fetchFromAPI(`?&search=${anime}`)
    .then(data => setAnimeList(data.data))
  
  }, [anime])

  const titles = animeList.map( (title) => {
    return title.title
  })

  console.log(titles);

  return (
    <div className="container">
      <nav>
        <a className='logo' href="">Orion <span>Anime</span></a>
        <div className='nav-links'>
          <Link to="/" className='nav-link'>
            <p>Home</p>
          </Link> 
          <Link to="/genre/" className='nav-link'>
            <p>Genre</p>
          </Link> 
          <Link to="/ranking/" className='nav-link'>
            <p>Ranking</p>
          </Link> 
        </div>
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
      <main>
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
