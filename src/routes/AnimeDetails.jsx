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
        <h2>{title}</h2>

        <div className="anime-genres">
          {genres.map(genre => (
            <p>{genre}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AnimeDetails