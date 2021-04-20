import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabsComponent.css";
import TabsGermany from "./TabsGermany";
import TabsIndonesia from "./TabsIndonesia";
import TabsEngland from "./TabsEngland";

function TabsComponent() {
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

export default TabsComponent;
