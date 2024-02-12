import { Phone } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ContactUs = () => {
  const contactDetails = [
    {
      icon: <Phone sx={{ color: "textWhite", mt: "5px" }} />,
      info: "+88 02-48112430",
    },
    {
      icon: <MailIcon sx={{ color: "textWhite", mt: "5px" }} />,
      info: "info@abscables.com",
    },
    {
      icon: <LocationOnIcon sx={{ color: "textWhite", mt: "8px" }} />,
      info: "ENA TOWER DE OLIO, Plot # 57/3, 57/4, 57/5,Flat # 602 Lake Circus, Kalabagan, West Panthapath, Dhaka 1205, Bangladesh",
    },
  ];
  const formOPtions = [
    "Name",
    "Email Address",
    "Phone Number",
    "How Can We Help?",
  ];
  return (
    <Container sx={{ mt: "90px" }}>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid
          item
          xs={5}
          sx={{
            background: "rgba(255, 251, 227, 0.20)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <FormControl
            sx={{
              width: 1,
              p: "50px 40px 70px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {formOPtions.map((option, idx) => {
              return (
                <Box key={idx}>
                  <Typography variant="body4" sx={{ color: "textWhite" }}>
                    {option}
                  </Typography>
                  <TextField
                    multiline={idx === 3 ? true : false}
                    sx={{
                      width: 1,
                      mt: "20px",
                      border: "2px solid #F5D010",
                      borderRadius: "8px",
                      py: "12px",
                    }}
                  />
                </Box>
              );
            })}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          {contactDetails?.map(({ icon: Icon, info }, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  gap: "30px",
                }}
              >
                {Icon}
                <Typography variant="body4" sx={{ color: "textBlack" }}>
                  {info}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
