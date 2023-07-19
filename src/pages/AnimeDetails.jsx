import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState([]);

  // Fetch Anime Details

  useEffect(() => {
    fetchAnimeDetails();
  }, [id]);

  return (
    <div className="containerWrap">
      <div className="details-left">
        <img src={animeDetails?.image} alt="anime-detail-img" className="anime-detail-img" />
      </div>

      <div className="details-right">
        <div className="titles">
          <h2 className="anime-details-title">{animeDetails?.title}</h2>
          <div className="alternate-titles">
            <h3>Alternate Titiles</h3>
            <div className="alternate-title">
              {animeDetails?.alternativeTitles.map((titles, idx) => (
                <span key={idx}>{titles}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="anime-details-genres">
          {animeDetails?.genres.map((genre, idx) => (
            <p key={idx}>{genre}</p>
          ))}
        </div>

        <div className="anime-status">
          <p>Status: {animeDetails?.status}</p>
        </div>

        <div className="anime-type">
          <p>Type: {animeDetails?.type}</p>
        </div>

        <div className="anime-overview">
          <h2>Overview</h2>
          <p>{animeDetails?.synopsis}</p>
        </div>

        <div>
          <a href={animeDetails?.link} target="_blank" className="watch-link">
            Watch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
