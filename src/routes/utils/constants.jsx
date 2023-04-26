import { GiMaterialsScience, GiPunch, GiPuzzle, GiAlienStare, GiMagicPortal, GiFullPizza, GiFullPizza, GiLovers, GiDramaMasks  } from "react-icons/gi"
import { BsArrowThroughHeartFill, BsAward } from "react-icons/bs"
import { HiSparkles } from "react-icons/hi"
import { TbPumpkinScary } from "react-icons/tb"
import { MdSportsSoccer, MdOutlineTheaterComedy } from "react-icons/md"
import { BiMovie } from "react-icons/bi"


export const categories = [
  { name: 'Action', icon: <GiPunch /> },
  { name: 'Award Winning', icon: <BsAward />, },
  { name: 'Horror', icon: <TbPumpkinScary />, },
  { name: 'Ecchi', icon: <HiSparkles />, },
  { name: 'Sports', icon: <MdSportsSoccer  />, },
  { name: 'Supernatural', icon: <GiAlienStare />, },
  { name: 'Fantasy', icon: <GiMagicPortal />, },
  { name: 'Gourmet', icon: <GiFullPizza />, },
  { name: 'Boys Love', icon: <GiLovers/>, },
  { name: 'Drama', icon: <GiDramaMasks />, },
  { name: 'Comedy', icon: <MdOutlineTheaterComedy />, },
  { name: 'Mystery', icon: <GiPuzzle />, },
  { name: 'Girls Love', icon: <GiLovers />, },
  { name: 'Slice of Life', icon: <BiMovie />, },
  { name: 'Adventure', icon: <FaMountain />, },    
  { name: 'Romance', icon: <BsArrowThroughHeartFill />, },    
  { name: 'Sci-Fi', icon: <GiMaterialsScience />, },    
  { name: 'Hentai', icon: <HiSparkles />, }    
]