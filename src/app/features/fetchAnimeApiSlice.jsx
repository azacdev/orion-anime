import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=500'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

export const fetchAnimeApi = createApi({
  reducerPath: "fetchApiData",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', options.headers['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', options.headers['X-RapidAPI-Host']);
      return headers;
      },
  }),
  endpoints: (builder) => ({
    fetchAnimeByGenre: builder.query({
      query: ({params}) => {
        // Modify the request URL to include dynamic page and size parameters
        const url = `${BASE_URL}/${params}`;
        return { url }
      },
    }),
  })
})


export const { useFetchAnimeByGenreQuery } = fetchAnimeApi;
