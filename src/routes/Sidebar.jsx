import { Link } from 'react-router-dom';
import { categories } from './utils/constants';

const Sidebar = () => {
  return (
    <div>
      <div className='nav-links'>
        <Link to="/" className='nav-link'>
          <h3>Home</h3>
        </Link> 
        <Link to="/genre/" className='nav-link'>
          <h3>Genre</h3>
        </Link>
        <Link to="/ranking/" className='nav-link'>
          <h3>Ranking</h3>
        </Link> 
      </div>

      <div className="genre">
        {categories.map((category) => (
          <div className='category-btn'>
            <button>{category.icon}</button>
            <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar