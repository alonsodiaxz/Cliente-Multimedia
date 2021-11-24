import React from "react";
import "./Searchs.scss";

import LoadMovies from "../../../components/LoadMovies/LoadMovies";

export default function Searchs(props) {
  const films = props.location.data.filmsSearched;

  return (
    <div className="searchs">
      <h1>
        {films.length === 0
          ? "No se han encontrado resultados"
          : " Peliculas encontradas..."}
      </h1>
      <LoadMovies films={films} />
    </div>
  );
}
