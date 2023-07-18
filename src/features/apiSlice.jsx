import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  endpoints: (builder) => ({
    getPopularAnime: builder.query({
      query: () => "/top/anime?filter=bypopularity"
    })
  })
});

export const { useGetPopularAnimeQuery } = animeApi
