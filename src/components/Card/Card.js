import React, { Component } from "react";
import "./Card.css";
import { Row, Col } from "react-bootstrap";
import globalIcon from "../../assets/global-icon.svg";
import positifIcon from "../../assets/positif-icon.svg";
import deathIcon from "../../assets/death-icon.svg";
import recoveredIcon from "../../assets/recovered-icon.svg";
import { connect } from "react-redux";
import { getWorldWideCase } from "../../actions/caseAction";

class Card extends Component {
  //   componentDidMount() {
  //     this.props.onGetWorldWideCase();
  //   }

  render() {
    const worldWideCase = this.props.case.caseData.Global;
    const numberFormat = (num) => {
      var num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return num_parts.join(".");
    };
    return (
      <div className="container position-relative">
        <div className="wrapper__card container">
          <Row>
            <Col>
              <div className="d-flex align-items-center flex-wrap">
                <div>
                  <img src={globalIcon} alt="globalIcon" />
                </div>
                <div className="wrapper__card-text">
                  <p className="card-text__status-cases">Stats Overview</p>
                  <p className="card-text__total-cases">Worldwide</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center flex-wrap">
                <div>
                  <img src={positifIcon} alt="positifIcon" />
                </div>
                <div className="wrapper__card-text">
                  <p className="card-text__status-cases">
                    Total Coronavirus Cases
                  </p>
                  <p className="card-text__total-cases">
                    {worldWideCase
                      ? numberFormat(worldWideCase.TotalConfirmed)
                      : null}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center flex-wrap">
                <div>
                  <img src={recoveredIcon} alt="recoveredIcon" />
                </div>
                <div className="wrapper__card-text">
                  <p className="card-text__status-cases">Total Recovered</p>
                  <p className="card-text__total-cases">
                    {worldWideCase
                      ? numberFormat(worldWideCase.TotalRecovered)
                      : null}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center flex-wrap">
                <div>
                  <img src={deathIcon} alt="deathIcon" />
                </div>
                <div className="wrapper__card-text">
                  <p className="card-text__status-cases">Total Deaths</p>
                  <p className="card-text__total-cases">
                    {worldWideCase
                      ? numberFormat(worldWideCase.TotalDeaths)
                      : null}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    case: state.case,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWorldWideCase: () => dispatch(getWorldWideCase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
