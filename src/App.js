import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import TextField from "@mui/material/TextField";
import NavBar from "./NavBar.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataBox from "./DataBox";
import Footer from "./footer";

const App = () => {
  const [data, setData] = useState({
    location: {
      name: "Jaipur",
      region: "Rajasthan",
      country: "India",
      lat: 26.92,
      lon: 75.82,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1657569436,
      localtime: "2022-07-12 1:27",
    },
    current: {
      last_updated_epoch: 1657568700,
      last_updated: "2022-07-12 01:15",
      temp_c: 29.0,
      temp_f: 84.2,
      is_day: 0,
      condition: {
        text: "Mist",
        icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
        code: 1030,
      },
      wind_mph: 2.2,
      wind_kph: 3.6,
      wind_degree: 324,
      wind_dir: "NW",
      pressure_mb: 1003.0,
      pressure_in: 29.62,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 89,
      cloud: 50,
      feelslike_c: 30.3,
      feelslike_f: 86.6,
      vis_km: 3.0,
      vis_miles: 1.0,
      uv: 1.0,
      gust_mph: 12.5,
      gust_kph: 20.2,
    },
  }); //Initialize data to some sample
  const [city, setcity] = useState("Phulera"); //Initialize city
  const fetchApi = async () => {
    // Function for fetching data from API
    await axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=2e422bff75ab4c6ba4a181307221107&q=${city}&aqi=yes`
      )
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    //Fetch data from API whenever city changes
    fetchApi();
  }, [city]);
  useEffect(() => {
    document.title = "Atrangi Weather App";
  }, []);
  return (
    //Body structure
    <>
      <NavBar />
      <Paper
        elevation={12}
        sx={{
          padding: "2%",
          width: "45%",
          height: "100%",
          margin: "auto",
          marginTop: "5%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <TextField
          size="large"
          color="success"
          sx={{
            backgroundColor: "white",
            padding: "auto",
            width: "100%",
            color: "rgb(255, 0, 119)",
            margin: "auto",
            align: "center",
          }}
          value={city}
          label="City"
          onChange={(e) => {
            setcity(e.target.value);
          }}
          variant="filled"
        />
        <DataBox data={data} />
      </Paper>
      <Footer />
    </>
  );
};

export default App;
