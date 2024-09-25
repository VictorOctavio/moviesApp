import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResult} from '../../../insfrastructure/interfaces/movie-db.reponse';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mappers';
import type {Movie} from '../../entities/Movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  const now_playing = await fetcher.get<NowPlayingResult>('/now_playing');
  return now_playing.results.map(MovieMapper.fromMovieDBResultToEntity);
};
