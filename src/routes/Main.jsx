import { useState } from "react"
import { AnimeCard, Navbar } from "./"

const Main = ({ animeList, toggleDarkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <main className="scroll-bar">
    <Navbar toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu}/>

    <div className="content">
      {animeList.map((item, idx) =>
        (item && <AnimeCard video={item} key={idx}/>)
      )}
    </div>
  </main>
  )
}

export default Main