import React, { useEffect, useState } from "react";
import { getAllFilms } from "../../../API/films";
import LoadMovies from "../../../components/LoadMovies/LoadMovies";
import "./AllMovies.scss";

export default function AllMovies(props) {
  const activar = props.location.data;
  const [films, setfilms] = useState([]);

  useEffect(() => {
    getAllFilms()
      .then((response) => {
        setfilms(response.films);
      })
      .catch((err) => {
        return err.message;
      });
  }, [activar]);

  return (
    <div className="all-movies">
      <h1> TODAS LAS PELICULAS </h1>
      <LoadMovies films={films} />
    </div>
  );
}
