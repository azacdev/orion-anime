import { AnimeCard } from "./Index";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useFetchAnimeByGenreQuery } from "../app/features/fetchAnimeApiSlice";
// import { selectAnimeList } from "../app/features/animeListSlice";
import { setGenre } from "../app/features/genreSlice";

const Main = ({searchResult }) => {
  const genre = useSelector(setGenre)
  const { data, error, isLoading }= useFetchAnimeByGenreQuery({genre: genre})
  // const animeList = useSelector(selectAnimeList)
  const animeList = data && data.data ? data.data : null 

  console.log(animeList)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [animesPerPage] = useState(24)

  // Calculate the index of the first and last animes to be displayed on the current page
  const startIndex = (currentPage - 1) * animesPerPage;
  const endIndex = startIndex + animesPerPage;

  // Get the animes to be displayed on the current page
  const currentAnimes = animeList.animeLists.slice(startIndex, endIndex)
  const currentSearchAnimes = searchResult.slice(startIndex, endIndex)

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Calculate the total number of pages based on the number of animes and the animes per page
  const totalPages = Math.ceil(animeList.animeLists.length / animesPerPage);
  const totalSearchPages = Math.ceil(searchResult.length / animesPerPage);
  
  return (
    <div>
      {searchResult.length > 0 ?
        (
          <>
            <div className="content">
              {currentSearchAnimes.map((item, idx) => (
                <div key={idx} className="anime-content">
                  {item && <AnimeCard video={item} key={idx}/>}
                </div>
              ))}
            </div>
            {currentSearchAnimes.length > 0 ? 
                <div className="pagination">
                  <button
                    className="btn pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Prev
                  </button>
        
                  <button className="btn">
                    {currentPage}
                  </button>
        
                  <button
                    className="btn pagination-btn"
                    disabled={currentPage === totalSearchPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div> 
                :
                null
              }
            </>
        ) 
        :
        (
          <>
            <div className="content">
              {currentAnimes.map((item, idx) => (
                <div key={idx} className="anime-content">
                  {item && <AnimeCard video={item}/>}
                </div>
              ))
              }
            </div>
            {currentAnimes.length > 0 ? 
              <div className="pagination">
                <button
                  className="btn pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Prev
                </button>
      
                <button className="btn">
                  {currentPage}
                </button>
      
                <button
                  className="btn pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div> 
              :
              null
            }
          </>
        )
      }
      
      
    </div>
      
  )
}

export default Main