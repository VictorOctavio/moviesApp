import {Movie} from '../../core/entities/Movie.entity';
import {Result} from '../interfaces/movie-db.reponse';

export class MovieMapper {
  public static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
    };
  }
}
