import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'

const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState(null)
  
  useEffect(() => {
    fetchFromAPI(`by-id/${id}`)
    .then(data => setAnimeDetails(data))
  }, [id])

  console.log(animeDetails);

  if (!animeDetails) return "Loading"

  const { title, image, genres, status, link, synopsis, alternativeTitles
  , type} = animeDetails 
  return (
    <div className='anime-details'>

      <div className="details-left">
        <img src={image} alt="anime-detail-img" className='anime-detail-img'/>
      </div>

      <div className="details-right">

        <div className="titles">
          <h2 className='anime-details-title'>{title}</h2>
          <div className="alternate-titles">
            <h3>Alternate Titiles</h3>
            <div className='alternate-title'>
            {alternativeTitles.map( titles => (
              <span>{titles}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="anime-details-genres">
          {genres.map(genre => (
            <p>{genre}</p>
          ))}
        </div>

        <div className="anime-status">
          <p>Status: {status}</p>
        </div>

        <div className="anime-type">
          <p>Type: {type}</p>
        </div>
        
        <div className="anime-overview">
          <h2>Overview</h2>
          <p>{synopsis}</p>
        </div>

        <div>
          <a href={link} className="watch-link">Watch</a>
        </div>
        
      </div>
    </div>
  )
}

export default AnimeDetails