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

  const { title, image, genres, link, synopsis, alternativeTitles
  , type} = animeDetails 
  return (
    <div className='anime-details'>
      
      <div className="details-left">
        <img src={image} alt="anime-image" className='anime-image'/>
      </div>

      <div className="details-right">

        <div className="titles">
          <h2>{title}</h2>
          <div className="alternate-titles">
            {alternativeTitles.map( titles => (
              <span>{titles}</span>
            ))}
          </div>
        </div>

        <div className="anime-genres">
          {genres.map(genre => (
            <p>{genre}</p>
          ))}
        </div>

        <div className="overview">
          <h2>Overview</h2>
          <p>{synopsis}</p>
        </div>
        
      </div>
    </div>
  )
}

export default AnimeDetails