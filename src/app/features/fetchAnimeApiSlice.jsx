import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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
      query: (genre) => `?&genre=${genre}`,
    }),
  })
})

export const { useFetchAnimeByGenreQuery } = fetchAnimeApi;
