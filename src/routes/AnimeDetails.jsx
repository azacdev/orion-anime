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

  const { title, image, link, synopsis, alternativeTitles
  , type} = animeDetails 
  return (
    <div className='anime-details'>
      <img src={image} alt="anime-image" className='anime-image'/>
      <h2>{title}</h2>
    </div>
  )
}

export default AnimeDetails