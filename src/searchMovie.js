import React from "react";

export default function searchMovie() {
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Submitting");

    const query = "Jurassic park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a8d37e967631e304efccdf4bc7f18cd0&language=en-US&query=${query}&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovie}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
