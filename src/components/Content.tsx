import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { MovieProps } from "../utils/types";

export const Content = ({ selectedGenre, movies }: any) => (
  <div className="container">
    <Header selectedGenre={selectedGenre} />
    <main>
      <div className="movies-list">
        {movies.map((movie: MovieProps) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </div>
);
