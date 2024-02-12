import { Box } from "@mui/material";

const AnimatedHamburger = () => {
  return (
    <Box className="background">
      <button className="menu__icon">
        <Box component="span"></Box>
        <Box component="span"></Box>
        <Box component="span"></Box>
      </button>
    </Box>
  );
};

export default AnimatedHamburger;
