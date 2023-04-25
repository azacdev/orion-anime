import { Link } from "react-router-dom"

const Animes = ({videos}) => {
  return (
    <div className="anime-card">
      <Link to="/anime/">
        <img src={videos.image} className="anime-image" alt="anime-image" />
        <p className="title">{videos.title}</p>
      </Link>
    </div>
  )
}

export default Animes