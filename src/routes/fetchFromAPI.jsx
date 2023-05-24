import axios from "axios";

const BASE_URL = 'https://anime-db.p.rapidapi.com/anime'

const options = {
  method: 'GET',
  params: {
   page: '1',
   size: '500',
  },
  headers: {
    'X-RapidAPI-Key': 'c7bf63b846msh6cc7e3d28ec4ea4p10ce26jsnf2819acfa859',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};
  
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(
	`${BASE_URL}/${url}`, options
  )
  return data
}