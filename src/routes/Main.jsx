import { AnimeCard } from "./";
import { useState } from 'react';

const Main = ({ animeList, searchResult }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [animesPerPage] = useState(24)

  // Calculate the index of the first and last animes to be displayed on the current page
  const startIndex = (currentPage - 1) * animesPerPage;
  const endIndex = startIndex + animesPerPage;
  console.log(startIndex);
  console.log(endIndex);

  // Get the animes to be displayed on the current page
  const currentAnimes = animeList.slice(startIndex, endIndex)
  const currentSearchAnimes = searchResult.slice(startIndex, endIndex)

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Calculate the total number of pages based on the number of animes and the animes per page
  const totalPages = Math.ceil(animeList.length / animesPerPage);
  
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
                {item && <AnimeCard video={item} key={idx}/>}
              </div>
            ))}
          </div>
        )
      }
      {currentAnimes.length > 0 || currentSearchAnimes.length > 0 ? 
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
      
    </div>
      
  )
}

export default Main