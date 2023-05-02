import { useState, useEffect} from 'react';
import {Sidebar, Main} from "./"
import { fetchFromAPI } from './utils/fetchFromAPI';
import React, { createContext } from "react";

export const Context = createContext()

const Root = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [selectedGenre, setSelectedGenre ] = useState("")
  const [animeList, setAnimeList] = useState([])
  const anime = "Naruto"

  const openMenu = () => {
    setToggleMenu(curr => !curr)
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
    <div className="App" id={theme}>
      <Context.Provider value={[theme, setTheme, toggleMenu, openMenu]}>
        <Sidebar toggleMenu={toggleMenu}/>
        <Main animeList={animeList} />
      </Context.Provider>
      </div>
  )
}

export default Root
