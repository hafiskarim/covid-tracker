import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabsComponent.css";
import { connect } from "react-redux";
import TabsGermany from "./TabsGermany";
import TabsIndonesia from "./TabsIndonesia";
import TabsEngland from "./TabsEngland";
import { getListByCountry } from "../../actions/caseAction";

class TabsComponent extends Component {
  componentDidMount() {
    this.props.getListByCountry();
  }
  render() {
    console.log(this.props.listByCountry);
    return (
      <div className="container wrapper__tabs-component">
        <Tabs defaultActiveKey="indonesia" id="controlled-tab-example">
          <Tab eventKey="indonesia" title="Indonesia">
            <TabsIndonesia />
          </Tab>
          <Tab eventKey="germany" title="Germany">
            <TabsGermany />
          </Tab>
          <Tab eventKey="england" title="England">
            <TabsEngland />
          </Tab>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGetListByCountry: () => dispatch(getListByCountry()),
//   };
// };

export default connect(mapStateToProps, { getListByCountry })(TabsComponent);
