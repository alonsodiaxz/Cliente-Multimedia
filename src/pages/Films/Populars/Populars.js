import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { getFilmsRating } from "../../../API/films";
import LoadMovies from "../../../components/LoadMovies/LoadMovies";

import "./Populars.scss";

export default function Populars(props) {
  const activar = props.location.data;
  const [films, setfilms] = useState([]);

  useEffect(() => {
    getFilmsRating()
      .then((response) => {
        setfilms(response.films);
      })
      .catch((err) => {
        return err.message;
      });
  }, [activar]);

  return (
    <div className="popular-films">
      <h1> POPULARES</h1>
      <Carousel autoplay>
        <LoadMovies films={films} />
      </Carousel>
    </div>
  );
}
