import React from "react";

export default function searchMovie() {
  return (
    <form className="form">
      <label className="label" htmlFor="query"></label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic park"
      />
      <button className="button" type="submit"></button>
    </form>
  );
}
