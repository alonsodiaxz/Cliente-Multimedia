import React, { useEffect, useState } from "react";
import "./Premieres.scss";
import { getPremieres } from "../../../API/films";
import LoadMovies from "../../../components/LoadMovies/LoadMovies";

export default function Premieres(props) {
  const bool = props.location.data;

  const [premieres, setPremieres] = useState([]);

  useEffect(() => {
    getPremieres()
      .then((response) => {
        setPremieres(response.films);
      })
      .catch((err) => {
        return err.message;
      });
  }, [bool]);

  return (
    <div className="premieres">
      <h1> ESTRENOS</h1>
      <LoadMovies films={premieres} />
    </div>
  );
}
