import ReactPaginate from 'react-paginate';
import { AnimeCard } from "./"
import { useState } from 'react';

const Main = ({ animeList, searchResult }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div>
      {searchResult.length > 0 ?
        (
          <div className="content">
            {searchResult.slice(currentPage * 20, (currentPage + 1) * 20).map((item, idx) => (
              <div key={idx} className="anime-content">
                {item && <AnimeCard video={item} key={idx}/>}
              </div>
            ))}
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={Math.ceil(movies.length / 20)}
              pageSize={20}
          />
          </div>
        ) 
        :
        (
          <div className="content">
            {animeList.map((item, idx) => (
              <div key={idx} className="anime-content">
                {item && <AnimeCard video={item} key={idx}/>}
              </div>
            ))}
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={Math.ceil(movies.length / 20)}
              pageSize={20}
      />
          </div>
        )
      }
    </div>
      
  )
}

export default Main