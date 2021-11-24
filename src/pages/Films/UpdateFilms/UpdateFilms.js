import React, { useEffect, useState } from "react";
import "./UpdateFilms.scss";
import { getFilmsGender } from "../../../API/films";
import LoadMovies from "../../../components/LoadMovies/LoadMovies";

export default function UpdateFilms(props) {
  const [filmsGender, setFilmsGender] = useState([]);

  const gender = localStorage.getItem("gender");

  useEffect(() => {
    getFilmsGender(gender)
      .then((response) => {
        setFilmsGender(response.films);

        return response;
      })
      .catch((err) => {
        return err.message;
      });
  }, [gender]);

  return (
    <div className="update-films">
      <h1> Películas de {gender}</h1>
      <LoadMovies films={filmsGender} />
    </div>
  );
}
