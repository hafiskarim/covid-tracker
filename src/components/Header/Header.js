import React from "react";
import "./Header.css";
import covidIcon from "../../assets/covid-icon.svg";
import covidImg from "../../assets/covid-img.svg";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div className="wrapper__header">
      <div className="container">
        <div className="d-flex align-items-center pt-3">
          <div>
            <img src={covidIcon} alt="covidIcon" />
          </div>
          <div className="header__title">
            <h1>Covid Tracker</h1>
          </div>
        </div>
        <Row>
          <Col>
            <div className="wrapper__header-text">
              <p className="header-text__sub-title">COVID-19 Live Tracker</p>
              <p className="header-text__description">
                Virus Corona (COVID-19) pertama kali dilaporkan di Wuhan, Hubei,
                China pada Desember 2019, wabah tersebut kemudian diakui sebagai
                pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret
                2020.
              </p>
            </div>
          </Col>
          <Col>
            <img src={covidImg} alt="covidImage" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
