import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => "/top/anime",
    }),
    getPopularAnime: builder.query({
      query: () => "/top/anime?filter=bypopularity",
    }),
    getUpcomingAnime: builder.query({
      query: () => "/seasons/upcoming",
    }),
    getAiringAnime: builder.query({
      query: () => "/top/anime?filter=airing",
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetPopularAnimeQuery,
  useGetUpcomingAnimeQuery,
  useGetAiringAnimeQuery,
} = animeApi;
