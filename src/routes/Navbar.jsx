import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleMenu } from "../app/features/toggleMenuSlice";

import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi"
import { IoIosContact } from "react-icons/io"
import SearchIcon from '../search.svg';
import { useLocation } from "react-router-dom";

const Navbar = ({theme, setTheme, searchTerm, setSearchTerm, searchAnime }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const toggleDarkMode = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

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
      event.target.closest('.menu-btn') === null
    ) {
      dispatch(handleMenu())
    }
  }
  
  return (
    <nav className='sticky'>
      <button className='btn menu-btn' onClick={() => dispatch(handleMenu())}><BiMenuAltLeft/></button>

      <button className='btn nav-icons' onClick={toggleDarkMode}>
        {theme === "dark" ? <BiBrightnessHalf/> : <BiBrightness/>}
      </button>

      {location.pathname.startsWith('/animes/') ?  null : 
        <div className="search">
          <div className="search-content">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          <span className='btn nav-icons'><IoIosContact/></span>
        </a>
      </button>
  </nav>
  )
}

export default Navbar