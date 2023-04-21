import { useState, useEffect } from 'react';
import SearchIcon from '../search.svg' ;
import { fetchFromAPI } from './utils/fetchFromAPI';


const Root = () => {
  const [animeList, setAnimeList] = useState()
  const anime = "Naruto"
  
  useEffect( () => {
    fetchFromAPI(`?&search=${anime}`)
    .then(data => setAnimeList(data.title))
    .catch( err => console.error(err))
    
  }, [])

  console.log(animeList);
  const page = `?&search=${anime}`

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
