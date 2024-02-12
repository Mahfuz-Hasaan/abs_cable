import logo from "@assets/shared/footer_logo.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const contacts = [
  {
    id: "1",
    icon: IoCallOutline,
    desc: "+88 02-48112430",
  },
  {
    id: "2",
    icon: MdOutlineMail,
    desc: "abscablesltd2018@gmail.com",
  },
  {
    id: "3",
    icon: IoLocationOutline,
    desc: "ENA TOWER DE OLIO, Plot # 57/3, 57/4, 57/5, Lake Circus Kalabagan, West Panthapath, Dhaka 1205,Bangladesh",
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "tertiary.main", py: "54px", mt: "120px" }}>
      <Container>
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={4}>
            <Box>
              <Box
                component="img"
                src={logo}
                sx={{ width: "140px", height: "auto" }}
              />
            </Box>
            <Typography variant="body1">
              ABS Cables Ltd. is one of the major Optical Fiber Cable
              manufacturing company in Bangladesh. Excellent products aligned
              the modern technological developments are our primary focus.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box
              component={Link}
              to="/news-&-blogs"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body4">News & Blog</Typography>
            </Box>
            <Box sx={{ textDecoration: "none" }}>
              <Typography variant="body4">Gallery</Typography>
            </Box>
            <Box sx={{ textDecoration: "none" }}>
              <Typography variant="body4">Company Profile</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            {contacts?.map(({ icon: Icon, desc }, idx) => {
              return (
                <Box
                  sx={{ display: "flex", alignItems: "start", gap: "20px" }}
                  key={idx}
                >
                  <Box sx={{ height: "18px !important", pt: "10px" }}>
                    <Icon size={22} />
                  </Box>
                  <Typography variant="body4">{desc}</Typography>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
