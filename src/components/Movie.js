import React from "react";
// import PrivateRoute from "./PrivateRoute";

const Movie = props => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        {props.image == null ? (
          <div className="card-img-top">
            <figure
              style={{
                backgroundImage: `url(https://www.nextlevelfairs.com/assets/images/image-not-available.png)`,
                backgroundSize: "contain"
              }}
              alt="not found"
            />
          </div>
        ) : (
          <div className="card-img-top">
            <figure
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w185${
                  props.image
                })`,
                backgroundSize: "cover"
              }}
              alt={`${props.title} cover`}
            />
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title crop-text-2">{props.title}</h5>
          <p className="card-text">
            <small className="text-muted">
              Release date{` `}
              {props.release_date}
            </small>
          </p>
          <a
            href="#"
            onClick={() => props.viewMovieInfo(props.movieId)}
            className="text-primary"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
