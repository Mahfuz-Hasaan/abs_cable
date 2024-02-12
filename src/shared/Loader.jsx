import { Box } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
        zIndex: 999999,
        height: "100vh",
        width: 1,
      }}
    >
      <Box className="loader">
        <Box className="face">
          <Box className="circle"></Box>
        </Box>
        <Box className="face">
          <Box className="circle"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
