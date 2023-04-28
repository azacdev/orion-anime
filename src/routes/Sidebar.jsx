import { Link } from 'react-router-dom';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div>
      <p className='category'>Categories</p>
      <ul className='btn'>
        <li>
          <Link to="/" className='btn-link'>
            <span className='icon'><BiHomeAlt2/></span>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/ranking/" className='btn-link'>
            <span className='icon'><AiOutlineStar/></span>
            <span>Ranking</span>
          </Link>
        </li>
      </ul>
        

      <hr />
      <p className='category'>Genres</p>
      {categories.map((category) => (
        <ul className='btn'>
          <li>
            <div className='btn-link'>
              <span className='icon'>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Sidebar