import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import TabsComponent from "./components/Tabs/TabsComponent";
// import axios from "axios";

function App() {
  // const options = {
  //   method: "GET",
  //   url: "https://covid-19-data.p.rapidapi.com/report/country/code",
  //   params: { date: "2020-04-01", code: "id" },
  //   headers: {
  //     "x-rapidapi-key": "2678840800msh5172d71fc9f2c9fp188627jsnc2f13bbe4a10",
  //     "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <>
      <Header />
      <Card />
      <TabsComponent />
    </>
  );
}

export default App;
