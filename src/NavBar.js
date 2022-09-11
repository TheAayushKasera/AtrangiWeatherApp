import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const NavBar = () => {
  return (
    <Box>
      <Typography
        variant={"h4"}
        sx={{
          color: "white",
          backgroundColor: "rgb(255, 0, 119)",
          padding: "2%",
          textAlign: "center",
        }}
      >
        <ThunderstormIcon fontSize="large" sx={{ fontSize: "42px" }} />
        &nbsp;&nbsp;{" "}
        <span style={{ color: "yellow", fontweight: "bold" }}>
          Atrangi&nbsp;
        </span>
        <span style={{ color: "lightgreen" }}>Weather&nbsp;</span>
        <span style={{ color: "orange" }}>Forecast</span>
      </Typography>
    </Box>
  );
};
export default NavBar;
