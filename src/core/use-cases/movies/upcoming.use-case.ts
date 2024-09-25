import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingResult} from '../../../insfrastructure/interfaces/movie-db.reponse';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mappers';
import {Movie} from '../../entities/Movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  const upcoming = await fetcher.get<UpcomingResult>('/upcoming');
  return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
};
