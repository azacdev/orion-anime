import { AnimeCard } from "./Index";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useFetchAnimeByGenreQuery } from "../app/features/fetchAnimeApiSlice";
import { setGenre } from "../app/features/genreSlice";
import { setCurrentPage } from "../app/features/currentPageSlice";
import { incrementCurrentPage, decrementCurrentPage } from "../app/features/currentPageSlice";

const Main = ({ searchResult }) => {
  const dispatch = useDispatch()
  const genre = useSelector(setGenre)
  const { data } = useFetchAnimeByGenreQuery({params: `&genres=${genre}`})
  const [animeList, setAnimeList] = useState([])
  
  useEffect(() => {
    const nestedData = data && data.data ? data.data : null;
    const animeData = nestedData ? Object.values(nestedData) : [];
    setAnimeList(animeData)
  }, [])

  console.log(animeList);
  
  const currentPage = useSelector(setCurrentPage)
  const [animesPerPage] = useState(24)
  console.log(currentPage);

  // Calculate the index of the first and last animes to be displayed on the current page
  const startIndex = (currentPage - 1) * animesPerPage;
  const endIndex = startIndex + animesPerPage;

  // Get the animes to be displayed on the current page
  const currentAnimes = animeList.slice(startIndex, endIndex)
  const currentSearchAnimes = searchResult.slice(startIndex, endIndex)

  // Change the current page
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  // Calculate the total number of pages based on the number of animes and the animes per page
  const totalPages = Math.ceil(animeList.length / animesPerPage);
  const totalSearchPages = Math.ceil(searchResult.length / animesPerPage);
  
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
      {currentSearchAnimes && currentAnimes ? 
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