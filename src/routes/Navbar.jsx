import { useEffect } from "react";
import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi"
import { IoIosContact } from "react-icons/io"
import SearchIcon from '../search.svg';

const Navbar = ({theme, setTheme, setToggleMenu }) => {
  const toggleDarkMode = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

  const openMenu = () => {
    setToggleMenu(true)
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
      setToggleMenu(false);
    }
  }
  

  return (
    <nav>
      <button className='btn menu-btn' onClick={openMenu}><BiMenuAltLeft/></button>

      <button className='btn nav-icons' onClick={toggleDarkMode}>
        {theme === "dark" ? <BiBrightnessHalf/> : <BiBrightness/>}
      </button>

      <div className="search">
        <div className="search-content">
          <input
            // value={searchTerm}
            // onChange={(e) => setSeacrhTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            // onClick={() => searchMovies(searchTerm)}
          />
        </div>

      </div>

      <button>
        <a href='#' className='login'>
          <p>LOGIN</p>
          <span className='btn nav-icons'><IoIosContact/></span>
        </a>
      </button>
  </nav>
  )
}

export default Navbar