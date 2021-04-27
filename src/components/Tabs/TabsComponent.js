import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabsComponent.css";
import { connect } from "react-redux";
// import TabsGermany from "./TabsGermany";
// import TabsIndonesia from "./TabsIndonesia";
// import TabsEngland from "./TabsEngland";
import { getListByCountry, getCaseByCountry } from "../../actions/caseAction";
import TabsInside from "./TabsInside";

class TabsComponent extends Component {
  componentDidMount() {
    this.props.getListByCountry();
    this.props.getCaseByCountry();
  }

  render() {
    const dataListByCountry = this.props.listByCountry.listByCountryData;
    console.log(dataListByCountry);
    return (
      <div className="container wrapper__tabs-component">
        <Tabs
          defaultActiveKey={dataListByCountry[0]}
          id="controlled-tab-example"
        >
          {/* <Tab eventKey="indonesia" title="Indonesia">
            <TabsIndonesia />
          </Tab>
          <Tab eventKey="germany" title="Germany">
            <TabsGermany />
          </Tab>
          <Tab eventKey="england" title="England">
            <TabsEngland />
          </Tab> */}
          {dataListByCountry.map((item) => (
            <Tab eventKey={item.alpha2code} title={item.name}>
              <TabsInside
                key={item.alpha2code}
                latitude={item.latitude}
                longitude={item.longitude}
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
  };
};

export default connect(mapStateToProps, { getListByCountry, getCaseByCountry })(
  TabsComponent
);
