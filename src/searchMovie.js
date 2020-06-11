import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");

  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);

  const SearchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a8d37e967631e304efccdf4bc7f18cd0&language=en-US&query=${query}&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={SearchMovie}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurassic park"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
