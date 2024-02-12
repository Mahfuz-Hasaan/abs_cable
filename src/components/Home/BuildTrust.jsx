import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const BuildTrust = () => {
  return (
    <Box sx={{ pt: "80px" }}>
      <Marquee style={{ height: "200px" }}>
        <Typography
          variant="h1"
          sx={{
            color: "textWhite",
            WebkitTextStroke: "2px #FAF6E2",
            WebkitTextFillColor: "transparent",
            px: "25px",
          }}
        >
          WE BUILD THE TRUST
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "textWhite",
            WebkitTextStroke: "2px #FAF6E2",
            WebkitTextFillColor: "transparent",
          }}
        >
          WE BUILD THE TRUST
        </Typography>
      </Marquee>
    </Box>
  );
};

export default BuildTrust;
