import React from "react";
import Movie from "./Movie";

const MovieList = props => {
  return (
    <section className="row">
      {props.movies.map((movie, i) => {
        return <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title} release_date={movie.release_date} />;
      })}
    </section>
  );
};
export default MovieList;
