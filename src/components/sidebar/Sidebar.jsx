import "./sidebar.css";
import { categories } from "../utils/Constants";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { selectGenre } from "../../slices/genreSlice";
import { resetCurrentPage } from "../../slices/currentPageSlice";

const Sidebar = ({ toggleMenu, setSearchResult }) => {
  const dispatch = useDispatch();

  const handleCategoryClick = (genre) => {
    setSearchResult([]);
    dispatch(selectGenre(genre));
    dispatch(resetCurrentPage());
  };

  return (
    <aside className={toggleMenu ? "scroll-bar show-menu" : "scroll-bar"}>
      <Link to="/" className="logo">
        Orion<span>Anime</span>
      </Link>

      <ul>
        <p className="category">Categories</p>
        <Link to="/">
          <li className="btn-link" onClick={() => handleCategoryClick("")}>
            <span className="icon">
              <AiOutlineStar />
            </span>
            <span className="category-name">Ranking</span>
          </li>
        </Link>

        <p className="category">Genres</p>
        {categories.map((category, index) => (
          <Link to="/" key={index}>
            <li
              className="btn-link"
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
