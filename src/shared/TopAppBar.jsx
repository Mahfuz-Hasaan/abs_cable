import logo from "@assets/shared/logo.webp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Grid, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",

    isDropdown: true,
    dropDownOptions: [
      {
        name: "Mission & Vission",
        link: "/mission-&-vission",
      },
      {
        name: "Founder's Vision",
        link: "/founders-vision",
      },
    ],
  },
  {
    name: "What We Do",

    isDropdown: true,
    dropDownOptions: [
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Services",
        link: "/services",
      },
    ],
  },
  {
    name: "Portfolio",

    isDropdown: true,
    dropDownOptions: [
      {
        name: "Clientele",
        link: "/clientele",
      },
      {
        name: "Team Members",
        link: "/team-members",
      },
    ],
  },
];

const TopAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEls, setAnchorEls] = React.useState(
    Array(navItems.length).fill(null)
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event, idx) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[idx] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (idx) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[idx] = null;
    setAnchorEls(newAnchorEls);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container sx={{ zIndex: 9999 }}>
      <Box>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            backgroundColor: "rgba( 0, 0, 0, 0.25 )",
            backdropFilter: "blur( 8px )",
            borderRadius: "100px",
          }}
        >
          <Grid item lg={2}>
            <Box sx={{ pt: "7px", pl: "9px" }}>
              <Box
                component="img"
                src={logo}
                sx={{ width: "172px", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={4.8}>
            <Box sx={{ display: { xs: "none", sm: "flex", gap: "50px" } }}>
              {navItems.map((item, idx) => (
                <Box key={idx}>
                  {item?.isDropdown ? (
                    <>
                      <Box
                        id={`basic-button-${idx}`}
                        aria-controls={
                          anchorEls[idx] ? `basic-menu-${idx}` : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          Boolean(anchorEls[idx]) ? "true" : undefined
                        }
                        onClick={(event) => handleClick(event, idx)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <Typography variant="body4" sx={{ color: "textWhite" }}>
                          {item?.name}
                        </Typography>
                        <ArrowDropDownIcon sx={{ color: "tertiary.main" }} />
                      </Box>
                      <Menu
                        id={`basic-menu-${idx}`}
                        anchorEl={anchorEls[idx]}
                        open={Boolean(anchorEls[idx])}
                        onClose={() => handleClose(idx)}
                        MenuListProps={{
                          "aria-labelledby": `basic-button-${idx}`,
                        }}
                        sx={{
                          "& .MuiPaper-root": {
                            backgroundColor: "secondary.main",
                          },
                        }}
                        elevation={0}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        {item?.dropDownOptions?.map((item, idx) => {
                          return (
                            <MenuItem
                              key={idx}
                              onClick={() => handleClose(idx)}
                              sx={{
                                width: "160px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{ textDecoration: "none" }}
                                component={Link}
                                to={item?.link}
                              >
                                <Typography
                                  variant="body4"
                                  sx={{
                                    color: "textBlack",
                                    textAlign: "center",
                                  }}
                                  key={idx}
                                >
                                  {item?.name}
                                </Typography>
                              </Box>
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{ textDecoration: "none" }}
                        component={Link}
                        to={item?.link}
                      >
                        <Typography
                          variant="body4"
                          sx={{ color: "textWhite" }}
                          key={idx}
                        >
                          {item?.name}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={3.0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: "10px",
              bgcolor: "tertiary.main",
              borderRadius: "100px",
              mr: "9px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                cursor: "pointer",

                "& .social-icon": {
                  transition: "transform 0.9s ease-in-out",
                  color: "#222",
                },
                "& .social-icon:hover": {
                  transform: "rotate(360deg)",
                },
              }}
            >
              <FaFacebook
                size="24px"
                style={{ color: "#222" }}
                className="social-icon"
              />
              <FaLinkedinIn
                size="24px"
                style={{ color: "#222" }}
                className="social-icon"
              />
              <FaYoutube
                size="24px"
                style={{ color: "#222" }}
                className="social-icon"
              />
            </Box>
            <Box component={Link} to="contact-us">
              <Box sx={{ py: "6px" }}>
                <ArrowButton title="Contact Us" btnVariant={"btnYellow"} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Container>
  );
};

export default TopAppBar;
