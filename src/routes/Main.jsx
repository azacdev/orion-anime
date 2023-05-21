import AnimeCard from "./AnimeCard";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setGenre } from "../app/features/genreSlice";
import { setCurrentPage } from "../app/features/currentPageSlice";
import { incrementCurrentPage, decrementCurrentPage } from "../app/features/currentPageSlice";
import { fetchFromAPI } from "./utils/fetchFromAPI";

const Main = ({ searchResult }) => {
  const dispatch = useDispatch()
  const genre = useSelector(setGenre)
  const [animeList, setAnimeList] = useState([])
  console.log(genre);

  useEffect(() => {
    fetchFromAPI(`?&genres=${genre}`)
    .then(data => setAnimeList(data.data))
    .catch( console.error('error'))
  }, [genre]);

  console.log(animeList);
  
  const currentPage = useSelector(setCurrentPage)
  const [animesPerPage] = useState(24)

  // Calculate the index of the first and last animes to be displayed on the current page
  const startIndex = (currentPage - 1) * animesPerPage;
  const endIndex = startIndex + animesPerPage;

  // Get the animes to be displayed on the current page
  const currentAnimes = animeList.slice(startIndex, endIndex)
  const currentSearchAnimes = searchResult.slice(startIndex, endIndex)

  // Calculate the total number of pages based on the number of animes and the animes per page
  const totalPages = Math.ceil(animeList.length / animesPerPage);
  const totalSearchPages = Math.ceil(searchResult.length / animesPerPage);

  const disablePages = () => {

  }
  
  return (
    <div>
      {searchResult.length > 0 ?
        (
          <div className="content">
            {currentSearchAnimes.map((item, idx) => (
              <div key={idx} className="anime-content">
                {item && <AnimeCard video={item} key={idx}/>}
              </div>
            ))}
          </div>
        ) 
        :
        ( 
          <div className="content">
            {currentAnimes.map((item, idx) => (
              <div key={idx} className="anime-content">
                {item && <AnimeCard video={item}/>}
              </div>
            ))
            }
          </div>
        )
      }
      {currentSearchAnimes.length > 0 || currentAnimes.length > 0 ? 
        <div className="pagination">
          <button
            className="btn pagination-btn"
            disabled={currentPage === 1}
            onClick={() => dispatch(decrementCurrentPage())}
          >
            Prev
          </button>

          <button className="btn">
            {currentPage}
          </button>
          
          <button
            className="btn pagination-btn"
            disabled={currentSearchAnimes ? currentPage === totalSearchPages : currentPage === totalPages }
            onClick={() => dispatch(incrementCurrentPage())}
          >
            Next
          </button>
        </div> 
        :
        null
      }
    </div>
  )
}

export default Main