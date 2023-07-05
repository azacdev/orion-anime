import "./sidebar.css"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectedGenre } from '../../app/features/genreSlice';
import { resetCurrentPage } from '../../app/features/currentPageSlice';
import { categories } from '../Constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = ({toggleMenu, setSearchResult }) => {
  const dispatch = useDispatch()

  const handleCategoryClick = (genre) => {
    setSearchResult([]);
    dispatch(selectedGenre(genre))
    dispatch(resetCurrentPage())
  };

  return (
    <aside className={toggleMenu ? 'scroll-bar show-menu' : "scroll-bar"}>
      <Link to="/" className='logo'>
        Orion<span>Anime</span>
      </Link>

      <ul className='btn'>
        <p className='category'>Categories</p>
        <Link to="/">
          <li className='btn-link' onClick={()=> handleCategoryClick("")}>
            <span className='icon'>
              <BiHomeAlt2/>
            </span>
            <span className='category-name'>Home</span>
          </li>
        </Link>

        <Link to="/">
          <li className='btn-link' onClick={()=> handleCategoryClick("")}>
            <span className='icon'>
              <AiOutlineStar/>
            </span>
            <span className='category-name'>Ranking</span>
          </li>
        </Link>

        <p className='category'>Genres</p>
        {categories.map((category, index) => (
          <Link to="/" key={index}>
            <li 
              className='btn-link'
              onClick={()=> handleCategoryClick(category.name)}
              >
              <span className='icon'>{category.icon}</span>
              <span className='category-name'>{category.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar