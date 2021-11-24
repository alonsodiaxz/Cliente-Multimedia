import React from "react";
import "./Play.scss";
import ReactPlayer from "react-player/youtube";
import Opinions from "../Opinions";
import { Col, Row } from "antd";

export default function Play(props) {
  const title = localStorage.getItem("title");
  const url = localStorage.getItem("url");
  const subtitle = localStorage.getItem("subtitle");

  return (
    <div className="play">
      <div className="play__titulo">
        <Row>
          <p>
            TRAILER OFICIAL
            <span>{title}</span>
            &mdash; {subtitle} &mdash;
          </p>
        </Row>
      </div>

      <div className="play__reproductor">
        <ReactPlayer url={url} />
      </div>

      <div className="play__opiniones">
        <Col lg={3}></Col>

        <Col lg={18}>
          <Opinions title={title} />
        </Col>
        <Col lg={3}></Col>
      </div>
    </div>
  );
}
