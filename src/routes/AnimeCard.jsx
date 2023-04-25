import { Link } from "react-router-dom"

const AnimeCard = ({video, key}) => {
  return (
    <div className="anime-content">
      <Link to="/anime/" className="anime-card" key={key}>
        <img src={video.image} className="anime-image" alt="anime-image" />
        <p className="anime-title">{video.title}</p>
      </Link>
    </div>
  )
}

export default AnimeCard