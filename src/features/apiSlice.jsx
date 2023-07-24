import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => `/top/anime`,
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
    getSearchAnime: builder.query({
      query: (anime) => `/anime?q=${anime}&order_by=popularity&sort=asc&sfw`,
    }),
    getAnimeById: builder.query({
      query: (anime) => `/anime/${anime}`,
    }),
    getAnimeCharacters: builder.query({
      query: (anime) => `/anime/${anime}/characters`,
    }),
    getRelatedAnimes: builder.query({
      query: (anime) => `/anime/${anime}/relations`,
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetPopularAnimeQuery,
  useGetUpcomingAnimeQuery,
  useGetAiringAnimeQuery,
  useGetSearchAnimeQuery,
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetRelatedAnimesQuery
} = animeApi;
