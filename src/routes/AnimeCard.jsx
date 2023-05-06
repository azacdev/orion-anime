import { Link } from "react-router-dom"

const AnimeCard = ({ video: {_id, image, title}}) => {

  return (
    <div className="anime-content">
      <Link to={_id ? `/animes/${_id}` : ""} className="anime-card">
        <img src={image} className="anime-image" alt="anime-image" />
        <p className="anime-title">{title}</p>
      </Link>
    </div>
  )
}

export default AnimeCard