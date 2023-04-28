import { Link } from 'react-router-dom';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div>
      <p className='category'>Categories</p>
      <ul className='nav-links'>
        <li>
          <Link to="/" className='nav-link'>
            <button className='btn'><BiHomeAlt2/></button>
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/ranking/" className='nav-link'>
            <button className='btn'><AiOutlineStar/></button>
            <h3>Ranking</h3>
          </Link>
        </li>
      </ul>

      <hr />
      <p className='category'>Genres</p>
      <ul className='nav-links'>
        {categories.map((category) => (
          <li className='nav-link'>
            <button className='btn'>{category.icon}</button>
            <h3>{category.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar