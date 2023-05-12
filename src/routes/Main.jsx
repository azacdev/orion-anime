import { AnimeCard } from "./"
import { useState } from 'react';

const Main = ({ animeList, searchResult }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [animesPerPage] = useState(24)

  // Calculate the index of the first and last movies to be displayed on the current page
  const indexOfLastAnime = currentPage * animesPerPage; // 24
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage; // 0

  // Get the movies to be displayed on the current page
  const currentAnimes = animeList.slice(indexOfFirstAnime, indexOfLastAnime)

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

   // Calculate the total number of pages based on the number of movies and the movies per page
   const totalPages = Math.ceil(animeList.length / animesPerPage);

   // Generate an array of page numbers for the pagination buttons
   const pageNumbers = [];
   for (let i = 1; i <= totalPages; i++) {
     pageNumbers.push(i);
   }
  
  return (
    <div>
      {searchResult.length > 0 ?
        (
          <div className="content">
            {searchResult.slice(currentPage * 24, (currentPage + 1) * 24).map((item, idx) => (
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
            <div className="pagination">
              <button
              className='btn'
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
              {/* {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === currentPage ? 'active' : ''}
                >
                  {pageNumber}
                </button>
              ))} */}
              <button
              className='btn'
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )
      }
    </div>
      
  )
}

export default Main