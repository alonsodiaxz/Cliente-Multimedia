import React, { useEffect, useState } from "react";
import "./Searchs.scss";
import { getFilmsName } from "../../../API/films";

import LoadMovies from "../../../components/LoadMovies/LoadMovies";

export default function Searchs(props) {
  const [films, setfilms] = useState([]);

  const filmName = localStorage.getItem("filmvalue");

  useEffect(() => {
    getFilmsName(filmName)
      .then((response) => {
        const data = response.filmsSearched;
        setfilms(data);
      })
      .catch((err) => {
        return err.message;
      });
  }, [filmName]);

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
