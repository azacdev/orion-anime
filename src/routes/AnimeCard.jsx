import { Link } from "react-router-dom"

const AnimeCard = ({video: {_id}}) => {
  
  return (
    <div className="anime-content">
      <Link to={`/animes/${_id}`} className="anime-card">
        <img src={video.image} className="anime-image" alt="anime-image" />
        <p className="anime-title">{video.title}</p>
      </Link>
    </div>
  )
}

export default AnimeCard