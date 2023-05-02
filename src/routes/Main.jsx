import { AnimeCard } from "./"

const Main = ({ animeList}) => {
    
  return (

    <div className="content">
      {animeList.map((item, idx) =>
        (item && <AnimeCard video={item} key={idx}/>)
      )}
    </div>
  )
}

export default Main