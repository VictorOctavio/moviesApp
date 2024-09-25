import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularResponse} from '../../../insfrastructure/interfaces/movie-db.reponse';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mappers';
import {Movie} from '../../entities/Movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  const upcoming = await fetcher.get<PopularResponse>('/popular');
  return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
};
