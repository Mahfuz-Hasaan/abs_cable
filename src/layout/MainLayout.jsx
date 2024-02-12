import bgImg from "@assets/hero-bg.webp";
import { AppBar, Box } from "@mui/material";
import Footer from "@shared/Footer";
import TopAppBar from "@shared/TopAppBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box
      onClick={() => setOpen(!isOpen)}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: 1,
          height: 1,
          zIndex: -1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <AppBar
          elevation={0}
          position="sticky"
          sx={{
            position: "fixed",
            background: "transform",
            zIndex: 9999,
            bgcolor: "transparent",
          }}
        >
          <TopAppBar />
        </AppBar>
        <Box sx={{ flexGrow: 1, height: 1 }}>
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
