import React from "react";
import Comments from "./Comments";

const MovieInfo = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <button
            onClick={props.closeMovieInfo}
            type="button"
            className="ml-2 mb-1 close"
            // data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="movie-cover">
            {props.currentMovie.poster_path === null ? (
              <figure
                style={{
                  backgroundImage: `url(https://www.nextlevelfairs.com/assets/images/image-not-available.png)`
                }}
                alt="not found"
              />
            ) : (
              <figure
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w185${
                    props.currentMovie.poster_path
                  })`
                }}
                alt={`${props.currentMovie.title} cover`}
              />
            )}
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <h2>{props.currentMovie.title}</h2>
          <small>{props.currentMovie.release_date}</small>
          <p>{props.currentMovie.overview}</p>
        </div>
      </div>
      <Comments id={props.currentMovie.id} />
    </div>
  );
};
export default MovieInfo;
