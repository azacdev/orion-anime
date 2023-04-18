import SearchIcon from '../search.svg'
import constants from './utils/constants'

const Root = () => {

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
