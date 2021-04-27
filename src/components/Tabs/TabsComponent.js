import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabsComponent.css";
import { connect } from "react-redux";
import { getListByCountry, getCaseByCountry } from "../../actions/caseAction";
import TabsInside from "./TabsInside";

class TabsComponent extends Component {
  componentDidMount() {
    this.props.getListByCountry();
    this.props.getCaseByCountry();
  }

  render() {
    const dataListByCountry = this.props.listByCountry.listByCountryData;
    const dataCaseByCountry = this.props.caseCountry.caseCountryData[0];
    return (
      <div className="container wrapper__tabs-component">
        <Tabs
          defaultActiveKey={dataListByCountry[0]}
          id="controlled-tab-example"
        >
          {dataListByCountry.map((item) => (
            <Tab eventKey={item.alpha2code} title={item.name}>
              <TabsInside
                key={item.alpha2code}
                latitude={item.latitude}
                longitude={item.longitude}
                dataByCountry={dataCaseByCountry}
              />
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listByCountry: state.listByCountry,
    caseCountry: state.caseCountry,
  };
};

export default connect(mapStateToProps, { getListByCountry, getCaseByCountry })(
  TabsComponent
);
