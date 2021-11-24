import React from "react";
import { Row, Col, Button, Rate } from "antd";
import "./Film.scss";
import { PlayCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";

export default function Film(props) {
  const fondo = localStorage.getItem("fondo");
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  const subtitle = localStorage.getItem("subtitle");
  const link = localStorage.getItem("link");
  const info = localStorage.getItem("info");
  const rate = localStorage.getItem("rate");
  console.log(rate);

  return (
    <div className="film">
      <div
        className="film__information"
        style={{
          background: `linear-gradient(rgb(17, 17, 17, 0.5), rgb(17, 17, 17, 0.7)),
         url(${link ? link : fondo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Row>
          <Col lg={3} />
          <Col lg={18}>
            <div className="info">
              <h2>
                {`${title}`} <br />
              </h2>
              <h3>{`${subtitle}`}</h3>
              <h4> {`${description}`}</h4>
              <Rate value={rate} />
            </div>
            <Row>
              <Link to={{ pathname: "/app/play" }}>
                <Button>
                  <PlayCircleOutlined />
                  Reproducir
                </Button>
              </Link>
              <a href={info} target="_blank" rel="noreferrer">
                <Button>
                  <InfoCircleOutlined />
                  Información
                </Button>
              </a>
            </Row>
          </Col>
          <Col lg={3} />
        </Row>
      </div>
      <div className="film__comments">
        <Row>
          <Col lg={3} />
          <Col lg={18}>
            <Comments title={title} />
          </Col>
          <Col lg={3} />
        </Row>
      </div>
    </div>
  );
}
