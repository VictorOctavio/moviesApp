import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8788f7b9af12f9f8c444572f2cc30942',
    language: 'es',
  },
});
