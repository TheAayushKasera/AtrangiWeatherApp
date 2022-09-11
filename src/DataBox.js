import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DataBox = (props) => {
  if (props.data != undefined && props.data != null && props.data != []) {
    return (
      <Box className="Detail" mt={2} sx={{ color: "gray" }}>
        <Box
          className="region-detail"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant={"h5"}>
            {props.data.location.name}, &nbsp;{props.data.location.region}
          </Typography>
          <Typography variant={"h6"}>
            {props.data.location.localtime}
          </Typography>
        </Box>
        <Box
          className="weather-detail-box"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box className="weather-text" sx={{ width: "50%" }}>
            <Typography variant={"h1"}>
              <span style={{ color: "pink" }}>
                {props.data.current.temp_c}°&nbsp;
              </span>
              <span style={{ color: "orange" }}>C</span>
            </Typography>

            <Typography mt={2} variant={"h4"}>
              Wind:&nbsp;
              <span style={{ color: "lightgreen" }}>
                {props.data.current.wind_kph}
              </span>
              &nbsp;
              <span style={{ color: "Red" }}>
                km/h&nbsp;
                {props.data.current.wind_dir}
              </span>
            </Typography>

            <Typography variant={"h4"}>
              Pressure:&nbsp;
              <span style={{ color: "purple" }}>
                {props.data.current.pressure_in}
              </span>
              &nbsp;in
            </Typography>

            <Typography variant={"h4"}>
              Humidity:&nbsp;
              <span style={{ color: "yellow" }}>
                {props.data.current.humidity}%
              </span>
              &nbsp;
            </Typography>
          </Box>
          <Box
            className="image-box"
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={props.data.current.condition.icon}
              alt={props.data.current.condition.text}
              style={{ width: "70%" }}
            />
            <Typography variant={"h4"} color="deeppink">
              {props.data.current.condition.text}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
};
export default DataBox;
