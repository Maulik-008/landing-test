import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "400px",
        background: "linear-gradient(to right, #4caf50, #f44336)",
        color: "#fff",
        textAlign: "center",
        py: 8,
        px: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        We Welcome You To
      </Typography>
      <Typography variant="h2" gutterBottom>
        Capiton AG Annual General Meeting 2023
      </Typography>
      <Typography variant="h5">27–28th November 2023</Typography>
    </Box>
  );
};

export default Hero;
