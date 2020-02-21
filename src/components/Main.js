import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";
import Pagination from "./Pagination";

const Main = props => {
  const nuYear = new Date().getFullYear() - 1;
  let arYears = Array.from(new Array(130), (val, index) => nuYear - index);
  const sbLabel = "Select year";
  arYears = [sbLabel, ...arYears];
  const apiKey = "1a7283b4473e2b19f58f53ec74170fbf";

  const [selectedOption, setSelectedOption] = useState(sbLabel);
  var [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  var [currentPage, setCurrentPage] = useState(1);
  var numberPages = Math.floor(totalResults / 20);

  const [currentMovie, setCurrentMovie] = useState(null);

  const handleChange = sbYear => {
    if (sbYear !== sbLabel) {
      setSelectedOption(sbYear);
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${sbYear}&sort_by=primary_release_date.asc&region=US`
      )
        .then(data => data.json())
        .then(data => {
          setMovies(data.results);
          console.log(data);
          setTotalResults(data.total_results);
          setCurrentPage(1);
        });
    }
  };
  const nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${selectedOption}&sort_by=primary_release_date.asc&region=US&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        setMovies(data.results);
        console.log(data);
        setCurrentPage(data.page);
      });
  };

  const viewMovieInfo = movieId => {
    const filteredMovie = movies.filter(movie => movie.id === movieId);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    setCurrentMovie(newCurrentMovie)
  };
  
  const closeMovieInfo=()=>{
    setCurrentMovie(null)
  }

  return (
    <div className="container">
      {currentMovie===null?
      <div><section className="row">
        <form action="#" className="col-sm-12">
          <div className="input-field">
            {/* <label for="dropDown">Select a year</label> */}
            <select
              className="custom-select"
              id="dropDown"
              value={selectedOption}
              // onBlur={e => handleChange(e.target.value)}
              onChange={e => handleChange(e.target.value)}
            >
              {arYears.map((nuYear, index) => {
                return (
                  <option key={`year${index}`} value={nuYear}>
                    {nuYear}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </section>
      <MovieList viewMovieInfo={viewMovieInfo} movies={movies} />
      {totalResults > 20 ? (
        <Pagination
          pages={numberPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}</div>
      :<MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} />}
    </div>
  );
};

export default Main;
