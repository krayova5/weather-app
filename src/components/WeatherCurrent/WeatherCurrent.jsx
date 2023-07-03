import React from "react";

//helpers
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

//components
import LocalInfo from "../LocalInfo";
import Today from "../Today";
import TextButton from "../../elements/Button";

//styles
import "../../assets/styles/components/weather-current.scss";

function WeatherCurrent({ today }) {
  return (
    <div className="container-current">
      <h2 className="title-current">See actual forecast</h2>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card className="section-current">
            <LocalInfo today={today} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="section-current">
            <Today today={today} />
          </Card>
        </Grid>
      </Grid>
      <TextButton/>
    </div>
  );
}
export default WeatherCurrent;
