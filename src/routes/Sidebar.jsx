import { Link } from 'react-router-dom';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = ({toggleMenu, setSelectedGenre, setSearchResult }) => {
  return (
    <header className={toggleMenu ? 'scroll-bar show-menu' : "scroll-bar"}>
      <a className='logo' href="">Orion<span>Anime</span></a>

      <ul className='btn'>
        <p className='category'>Categories</p>
        <li className='btn-link' onClick={()=> setSelectedGenre("")}>
          <span className='icon'><BiHomeAlt2/></span>
          <span className='categoty-name'>Home</span>
        </li>

        <li className='btn-link' onClick={()=> setSelectedGenre("")}>
          <span className='icon'><AiOutlineStar/></span>
          <span className='categoty-name'>Ranking</span>
        </li>

        <p className='category'>Genres</p>
        {categories.map((category) => (
            <li className='btn-link' 
              onClick={()=>(
                setSearchResult([]),
                setSelectedGenre(category.name)
              )}>
              <span className='icon'>{category.icon}</span>
              <span className='categoty-name'>{category.name}</span>
            </li>
        ))}
      </ul>
      </header>
  )
}

export default Sidebar