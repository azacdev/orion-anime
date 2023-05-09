import { Link } from "react-router-dom"

const AnimeCard = ({ video: {_id, image, title}}) => {

  return (
    <Link to={_id ? `/animes/${_id}` : ""} className="anime-card">
      <img src={image} className="anime-image" alt="anime-image" />
      <p className="anime-title">{title}</p>
    </Link>
  )
}

export default AnimeCard