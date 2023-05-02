import { useState } from "react"
import { AnimeCard, Navbar } from "./"

const Main = ({ animeList }) => {
    
  return (
    <main className="scroll-bar">
    <Navbar />

    <div className="content">
      {animeList.map((item, idx) =>
        (item && <AnimeCard video={item} key={idx}/>)
      )}
    </div>
  </main>
  )
}

export default Main