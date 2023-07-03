import React from "react";

//helpers
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//styles
import "../../assets/styles/components/weekly.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Weekly({ weekData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="container-weekly"
      >
        <Grid item xs={4} sm={4} md={4} className="item-weekly">
          {weekData.map((data) => (
            <Item key={data.key} cols={0.5} className="day">
              {data.key === 0 ? (
                <Typography className="info" gutterBottom color="error">
                  Today
                </Typography>
              ) : (
                <Typography className="info" gutterBottom color="error">
                  {data.day}
                </Typography>
              )}

              <img
                src={`https://openweathermap.org/img/w/${data.icon}.png`}
                alt={data.icon}
                loading="lazy"
              />
              <Typography gutterBottom className="info">
                {data.lTemp}°C - {data.hTemp}°C
              </Typography>
              <Typography variant="h6" gutterBottom>
                {data.main},
              </Typography>
              <h4 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                {data.desc}
              </h4>
            </Item>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Weekly;
