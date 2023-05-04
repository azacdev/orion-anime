import { AnimeCard } from "./"

const Main = ({ animeList}) => {
  return (
    <div className="content">
      {animeList.map((item, idx) => (
        <div key={idx}>
          {item && <AnimeCard video={item} key={idx}/>}
        </div>
      ))}
    </div>
  )
}

export default Main