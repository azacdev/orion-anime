import AnimeCard from "../animecard/AnimeCard";
import "./home.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenre } from "../../slices/genreSlice";
import { setCurrentPage } from "../../slices/currentPageSlice";
import {
  incrementCurrentPage,
  decrementCurrentPage,
} from "../../slices/currentPageSlice";
import { fetchFromAPI } from "../utils/fetchAnimeAPI";

const Home = ({ searchResult }) => {
  const dispatch = useDispatch();
  const genre = useSelector(setGenre);
  const [animeList, setAnimeList] = useState([]);
  const mainRef = useRef(null);

  // Fetch Anime by Genre
  const fetchSearchAnime = useCallback(() => {
    fetchFromAPI(`?&genres=${genre}`)
      .then((data) => setAnimeList(data.data))
      .catch(console.error("error"));
  }, []);

  useEffect(() => {
    fetchSearchAnime();
  }, [genre]);

  const currentPage = useSelector(setCurrentPage);
  const [animesPerPage] = useState(48);

  // Calculate the index of the first and last animes to be displayed on the current page
  const startIndex = (currentPage - 1) * animesPerPage;
  const endIndex = startIndex + animesPerPage;

  // Get the animes to be displayed on the current page
  const currentAnimes = animeList.slice(startIndex, endIndex);
  const currentSearchAnimes = searchResult.slice(startIndex, endIndex);

  // Calculate the total number of pages based on the number of animes and the animes per page
  const totalPages = Math.ceil(animeList.length / animesPerPage);
  const totalSearchPages = Math.ceil(searchResult.length / animesPerPage);

  // Scroll to Top and decrement currentPage
  const handlePrevPage = () => {
    dispatch(decrementCurrentPage());
    mainRef.current.scrollIntoView({ top: -91, behavior: "smooth" });
  };
  // Scroll to Top and Increment currentPage
  const handleNextPage = () => {
    dispatch(incrementCurrentPage());
    mainRef.current.scrollIntoView({ top: -91, behavior: "smooth" });
  };


  return (
    <div ref={mainRef} className="home scroll-bar">
      {currentAnimes.length === 0 && (
        <svg
          className="svg-animate"
          version="1.1"
          id="L6"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <rect
            fill="none"
            stroke="#666666"
            strokeWidth="4"
            x="25"
            y="25"
            width="50"
            height="50"
          >
            <animateTransform
              attributeName="transform"
              dur="0.5s"
              from="0 50 50"
              to="180 50 50"
              type="rotate"
              id="strokeBox"
              attributeType="XML"
              begin="rectBox.end"
            />
          </rect>
          <rect x="27" y="27" fill="#666666" width="46" height="50">
            <animate
              attributeName="height"
              dur="1.3s"
              attributeType="XML"
              from="50"
              to="0"
              id="rectBox"
              fill="freeze"
              begin="0s;strokeBox.end"
            />
          </rect>
        </svg>
      )}
      {searchResult.length > 0 ? (
        <div className="content">
          {currentSearchAnimes.map((item, idx) => (
            <div key={idx} className="anime-content">
              {item && <AnimeCard video={item} key={idx} />}
            </div>
          ))}
        </div>
      ) : (
        <div className="content">
          {currentAnimes.map((item, idx) => (
            <div key={idx} className="anime-content">
              {item && <AnimeCard video={item} />}
            </div>
          ))}
        </div>
      )}
      {currentSearchAnimes.length > 0 || currentAnimes.length > 0 ? (
        <div className="pagination">
          <button
            className="btn pagination-btn"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Prev
          </button>

          <button className="btn">{currentPage}</button>

          <button
            className="btn pagination-btn"
            disabled={
              currentSearchAnimes
                ? currentPage === totalSearchPages
                : currentPage === totalPages
            }
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
