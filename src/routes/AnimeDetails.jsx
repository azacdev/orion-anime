import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'

const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState()
  
  useEffect(() => {
    fetchFromAPI(`anime/by-id/${id}`)
    .then(data => setAnimeDetails(data.data))
  }, [id])
  return (
    <div className='anime-details'>AnimeDetails</div>
  )
}

export default AnimeDetails