import React, { Component } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { compose, withProps } from "recompose";
import positifIcon from "../../assets/positif-icon.svg";
import deathIcon from "../../assets/death-icon.svg";
import recoveredIcon from "../../assets/recovered-icon.svg";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAOlBfh2wf8D6nHrwU9coDZI8u2nviKHh4",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: props.latVal, lng: props.longVal }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: props.latVal, lng: props.longVal }} />
    )}
  </GoogleMap>
));

function TabsInside(props) {
  // console.log("Longitude" + props.longitude);
  // console.log("Latitude" + props.latitude);
  const latVal = props.latitude;
  const longVal = props.longitude;
  const numberFormat = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(".");
  };
  return (
    <>
      <div style={{ width: "800px", height: "100%" }}>
        <MapComponent isMarkerShown latVal={latVal} longVal={longVal} />
      </div>
      {/* <div className="d-flex justify-content-between mt-3">
        <div className="d-flex align-items-center flex-wrap">
          <div>
            <img src={positifIcon} alt="positifIcon" />
          </div>
          <div className="wrapper__tabsCountry">
            <p className="tabsCountry__status">Total Confirmed</p>
            <p className="tabsCountry__total">
              {totalCasesByCountry
                ? numberFormat(totalCasesByCountry[77].TotalConfirmed)
                : null}
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center flex-wrap">
          <div>
            <img src={recoveredIcon} alt="recoveredIcon" />
          </div>
          <div className="wrapper__tabsCountry">
            <p className="tabsCountry__status">Total Recovered</p>
            <p className="tabsCountry__total">
              {totalCasesByCountry
                ? numberFormat(totalCasesByCountry[77].TotalRecovered)
                : null}
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center flex-wrap">
          <div>
            <img src={deathIcon} alt="deathIcon" />
          </div>
          <div className="wrapper__tabsCountry">
            <p className="tabsCountry__status">Total Deaths</p>
            <p className="tabsCountry__total">
              {totalCasesByCountry
                ? numberFormat(totalCasesByCountry[77].TotalDeaths)
                : null}
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TabsInside;
