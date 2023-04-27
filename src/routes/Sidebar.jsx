import { Link } from 'react-router-dom';
import { categories } from './utils/constants';
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"

const Sidebar = () => {
  return (
    <>
      <div className='nav-links'>
        <Link to="/" className='nav-link'>
          <button className='btn'><BiHomeAlt2/></button><h3>Home</h3>
        </Link> 
        <Link to="/ranking/" className='nav-link'>
          <button className='btn'><AiOutlineStar/></button><h3>Ranking</h3>
        </Link> 
      </div>

      <div className="genre">
        <span>Genre</span>
        {categories.map((category) => (
          <div className='category-btn'>
            <button className='btn'>{category.icon}</button>
            <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sidebar