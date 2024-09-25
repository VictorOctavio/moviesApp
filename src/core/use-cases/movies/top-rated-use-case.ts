import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TopRatedResponse} from '../../../insfrastructure/interfaces/movie-db.reponse';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mappers';
import {Movie} from '../../entities/Movie.entity';

export const movieTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  const moviesTopRated = await fetcher.get<TopRatedResponse>('/top_rated');
  return moviesTopRated.results.map(MovieMapper.fromMovieDBResultToEntity);
};
