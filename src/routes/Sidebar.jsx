import { Link } from 'react-router-dom';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = ({toggleMenu, selectedGenre, setSelectedGenre }) => {
  return (
    <header className={toggleMenu ? 'scroll-bar show-menu' : "scroll-bar"}>
      <a className='logo' href="">Orion<span>Anime</span></a>
      <hr />
      <ul className='btn'>
        <p className='category'>Categories</p>
        <li>
          <Link to="/" className='btn-link'>
            <span className='icon'><BiHomeAlt2/></span>
            <span className='categoty-name'>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/ranking/" className='btn-link'>
            <span className='icon'><AiOutlineStar/></span>
            <span className='categoty-name'>Ranking</span>
          </Link>
        </li>

        <hr />
        <p className='category'>Genres</p>
        {categories.map((category) => (
            <li onClick={()=> setSelectedGenre(category.name)}>
              <div className='btn-link'>
                <span className='icon'>{category.icon}</span>
                <span className='categoty-name'>{category.name}</span>
              </div>
            </li>
        ))}
      </ul>
      </header>
  )
}

export default Sidebar