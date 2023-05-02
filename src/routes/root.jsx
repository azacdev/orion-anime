import { useState, useEffect} from 'react';
import {Sidebar, Main} from "./"
import { fetchFromAPI } from './utils/fetchFromAPI';
import React, { createContext } from "react";

const Root = () => {
  const Context = createContext()
  const [theme, setTheme] = useState("dark")
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"
  
  const toggleDarkMode = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

  // useEffect( () => {
  //   fetchFromAPI(`?&search=${anime}`)
  //   .then(data => setAnimeList(data.data))
  // }, [anime])

  // const titles = animeList.map((title) => {
  //   return title.title
  // })

  // console.log(titles);

  return (
    <div className="container" id={theme}>  
      <Sidebar toggleMenu={toggleMenu}/>
      <Main animeList={animeList} toggleDarkMode={toggleDarkMode}/>
    </div>
  )
}

export default Root
