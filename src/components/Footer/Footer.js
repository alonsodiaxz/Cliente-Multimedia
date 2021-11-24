import React from "react";
import { Row, Col, Layout } from "antd";
import SocialLinks from "../SocialLinks/SocialLinks";
import peliculas from "../../assets/img/png/peliculas.png";
import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <Row>
        <Col md={3} />
        <Col md={18}>
          <Row className="footer__copyright">
            <Col md={8}>
              <img
                className="footer__copyright__left-logo"
                src={peliculas}
                alt="Alonso Diaz Sobrino"
              />
            </Col>
            <Col md={12}>
              <div className="footer__copyright-desarrolladores">
                <Col md={12}>
                  <Row md={6}>
                    <h1>DESARROLLADORES WEB</h1>
                  </Row>
                  <Row md={6}>
                    <h4>ALONSO DÍAZ SOBRINO</h4>
                  </Row>
                  <Row md={6}>
                    <h4>JUAN MANUEL PORRERO ALMANSA</h4>
                  </Row>
                  <Row md={6}>© 2021 ALL RIGHTS RESERVED</Row>
                </Col>
                <Col md={12}>
                  <SocialLinks />
                </Col>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Col>
        <Col md={3} />
      </Row>
    </Footer>
  );
}
