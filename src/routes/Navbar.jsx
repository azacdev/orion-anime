import { useEffect } from "react";
import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi"
import { IoIosContact } from "react-icons/io"
import SearchIcon from '../search.svg';
import { useLocation } from "react-router-dom";

const Navbar = ({theme, setTheme, setToggleMenu, searchTerm, setSearchTerm, searchAnime }) => {

  const location = useLocation();
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar.offsetHeight;
      const scrollHeight = window.scrollY;
      setIsNavbarSticky(scrollHeight > navbarHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav className={isNavbarSticky ? 'sticky' : ''}>
      <button className='btn menu-btn' onClick={openMenu}><BiMenuAltLeft/></button>

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