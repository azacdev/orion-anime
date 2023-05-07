import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState()
  
  return (
    <div className='anime-details'>AnimeDetails</div>
  )
}

export default AnimeDetails