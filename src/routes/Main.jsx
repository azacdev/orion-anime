import { AnimeCard } from "./"

const Main = ({ animeList, searchResult }) => {
  return (
    <div>
      {searchResult.length > 0 ?
        (
          <div className="content">
            {searchResult.map((item, idx) => (
              <div key={idx} className="anime-content">
                {item && <AnimeCard video={item} key={idx}/>}
              </div>
            ))}
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
          </div>
        )
      }
    </div>
      
  )
}

export default Main