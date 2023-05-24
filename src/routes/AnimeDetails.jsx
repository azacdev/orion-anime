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

  if (!animeDetails) return (
    <svg className='svg-animate' version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"/>
        </rect>
        <rect x="27" y="27" fill="#fff" width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50" 
            to="0"
            id="rectBox" 
            fill="freeze"
            begin="0s;strokeBox.end"/>
        </rect>
    </svg>
  )

  const { title, image, genres, status, link, synopsis, alternativeTitles, type} = animeDetails 

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
            {alternativeTitles.map( (titles, idx) => (
              <span key={idx}>{titles}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="anime-details-genres">
          {genres.map((genre, idx) => (
            <p key={idx}>{genre}</p>
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
          <a href={link} target="_blank" className="watch-link">Watch</a>
        </div>
        
      </div>
    </div>
  )
}

export default AnimeDetails