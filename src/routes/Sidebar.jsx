import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../app/features/toggleMenuSlice";
import { selectedGenre } from '../app/features/genreSlice';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = ({toggleMenu, setSearchResult }) => {
  const dispatch = useDispatch()

  return (
    <header className={toggleMenu ? 'scroll-bar show-menu' : "scroll-bar"}>
      <Link to="/" onClick={() => dispatch(closeMenu)}>
        <a className='logo' href="">Orion<span>Anime</span></a>
      </Link>

      <ul className='btn'>
        <p className='category'>Categories</p>
        <Link to="/" onClick={() => dispatch(closeMenu)}>
          <li className='btn-link' onClick={()=> dispatch(selectedGenre(""))}>
            <span className='icon'><BiHomeAlt2/></span>
            <span className='categoty-name'>Home</span>
          </li>
        </Link>

        <Link to="/" onClick={() => dispatch(closeMenu)}>
          <li className='btn-link' onClick={()=> dispatch(selectedGenre(""))}>
            <span className='icon'><AiOutlineStar/></span>
            <span className='categoty-name'>Ranking</span>
          </li>
        </Link>

        <p className='category'>Genres</p>
        {categories.map((category, index) => (
          <Link to="/" key={index} onClick={() => dispatch(closeMenu)}>
            <li className='btn-link'
              onClick={()=>(
                setSearchResult([]),
                dispatch(selectedGenre(category.name))
              )}>
              <span className='icon'>{category.icon}</span>
              <span className='categoty-name'>{category.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      </header>
  )
}

export default Sidebar