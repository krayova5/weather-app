import React from "react";

//helpers
//import Card from "@mui/material/Card";
//import Grid from "@mui/material/Grid";


//components
import Weekly from "../../components/Weekly";

//styles
import "../../assets/styles/components/weather-weekly.scss";


function WeatherWeekly({ weekly }) {
  return (
    <div className="container-weekly">
      <h2 className="title-weekly">Your weekly forecast</h2>
      <Weekly weekData={weekly} />      
    </div>
  );
}
export default WeatherWeekly;
