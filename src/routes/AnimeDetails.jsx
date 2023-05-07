import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'

const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState()
  

  return (
    <div className='anime-details'>AnimeDetails</div>
  )
}

export default AnimeDetails