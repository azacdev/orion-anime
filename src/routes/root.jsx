import SearchIcon from '../search.svg'

const Root = () => {

  return (
    <div className="container">
      <nav>
        <a className='logo' href="">Orion <span>Anime</span></a>

        <div className="search">
          <input
            placeholder="Search..."
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
    </div>
  )
}

export default Root
