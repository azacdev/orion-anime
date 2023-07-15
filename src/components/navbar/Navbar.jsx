import "./navbar.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../../slices/toggleMenuSlice";
import { BiBrightnessHalf, BiBrightness, BiMenuAltLeft } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { resetCurrentPage } from "../../slices/currentPageSlice";
import SearchIcon from "../../search.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  searchAnime,
  theme,
  toggleTheme,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    // Close sidebar if click is outside of sidebar
    if (
      event.target.closest("header") === null &&
      event.target.closest(".menu-btn") === null &&
      !event.target.matches(".btn")
    ) {
      dispatch(closeMenu());
    }
  };

  // Invoke SearchAnime and Reset currentPage with Enter Key
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchAnime(searchTerm);
      dispatch(resetCurrentPage());
    }
  };

  // Invoke SearchAnime and Reset currentPage onClick
  const handleClicked = () => {
    setShouldSearchAnime(true);
    searchAnime(searchTerm);
    dispatch(resetCurrentPage());
  };

  return (
    <nav>
      <div className="toggle-btns">
      <button className="btn nav-icons" onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? <BiBrightnessHalf /> : <BiBrightness />}
      </button>
      <button className="menu-btn" onClick={() => dispatch(openMenu())}>
        <BiMenuAltLeft />
      </button>
      </div>

      {location.pathname.startsWith("/animes/") ? null : (
        <div className="search">
          <div className="search-content">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <img src={SearchIcon} alt="search" onClick={handleClicked} />
          </div>
        </div>
      )}

      <button>
        <a
          href="https://myanimelist.net/login"
          target="_blank"
          className="login"
        >
          <p>LOGIN</p>
          <span className="btn nav-icons">
            <IoIosContact />
          </span>
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
