import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, closeMenu } from "../app/features/toggleMenuSlice";
import { selectTheme, toggleTheme } from "../app/features/themeSlice";
import { selectSearchTerm, setSearchTerm } from "../app/features/searchTermSlice";
import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi"
import { IoIosContact } from "react-icons/io"
import SearchIcon from '../search.svg';
import { useLocation } from "react-router-dom";

const Navbar = ({ searchAnime }) => {
  const theme = useSelector(selectTheme)
  const searchTerm = useSelector(selectSearchTerm)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  const handleDocumentClick = (event) => {
    // Close sidebar if click is outside of sidebar
    if (
      event.target.closest('header') === null &&
      event.target.closest('.menu-btn') === null &&
      !event.target.matches('.btn')
    ) 
    {
      dispatch(closeMenu())
    }
  }

  return (
    <nav className='sticky'>
      <button className='menu-btn' onClick={() => dispatch(openMenu())}>
        <BiMenuAltLeft/>
      </button>
      
      <button className='btn nav-icons' onClick={()=> dispatch(toggleTheme())}>
        {theme === "dark" ? <BiBrightnessHalf/> : <BiBrightness/>}
      </button>

      {location.pathname.startsWith('/animes/') ?  null : 
        <div className="search">
          <div className="search-content">
            <input
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchAnime(searchTerm)}
            />
          </div>
        </div>
      }
      <button>
        <a href="https://myanimelist.net/login" target="_blank" className='login'>
          <p>LOGIN</p>
          <span className='btn nav-icons'>
            <IoIosContact/>
          </span>
        </a>
      </button>
  </nav>
  )
}

export default Navbar

