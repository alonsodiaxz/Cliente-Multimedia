import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./LoadMovies.scss";

const filmsCoverPageImages = require.context("../../assets/img/png", true);
const filmsBackgroundImages = require.context("../../assets/img/jpg", true);

export default function LoadMovies(props) {
  const films = props.films;

  return (
    <ul className="peliculas-buscar">
      {films.map((film, key) => (
        <li key={key}>
          <CardFilms
            image={filmsCoverPageImages(`./${film.image}`)}
            title={film.name}
            subtitle={film.gender}
            description={film.description}
            id={key}
            background={filmsBackgroundImages(`./${film.background}`)}
            url={film.url}
            rate={film.rating}
          />
        </li>
      ))}
    </ul>
  );
}

function CardFilms(props) {
  const { title, subtitle, image, id, background, description, url, rate } =
    props;
  const { Meta } = Card;

  const click = () => {
    localStorage.setItem("subtitle", subtitle);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("fondo", background.default);
    localStorage.setItem("url", url);
    localStorage.setItem("rate", rate);
  };

  return (
    <Link onClick={click} key={id} to={{ pathname: "/app/pelicula" }}>
      <Card
        key={id}
        className="popular-films__card"
        cover={<img src={image.default} alt="title" />}
      >
        <Meta title={title} description={subtitle}></Meta>
      </Card>
    </Link>
  );
}
