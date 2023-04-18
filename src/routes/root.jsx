import { useState, useEffect } from 'react';
import SearchIcon from '../search.svg' ;
import { fetchFromAPI } from './utils/fetchFromAPI';
import { categories } from './utils/constants' ;

const Root = () => {
  const [animesList, setAnimeList] = useState()

  useEffect(() => (
    fetchFromAPI(`search?part=snippet&q=naruto`)
    .then(data => console.log(data))
  ))

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
      <main>
        <div className='side-bar'>
          
        </div>
      </main>
    </div>
  )
}

export default Root
