import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
const link = "https://www.linkedin.com/in/aayush-kasera";
const Footer = () => {
  const open = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };
  return (
    <Box sx={{ position: "fixed", bottom: "0", right: "0" }}>
      <Link
        href="#"
        variant="h6"
        target="_blank"
        onClick={open}
        sx={{
          float: "right",
          marginBottom: "2%",
          marginTop: "2%",
          marginRight: "2%",
          textDecoration: "none",
        }}
      >
        @theAayushKasera
      </Link>
    </Box>
  );
};
export default Footer;
