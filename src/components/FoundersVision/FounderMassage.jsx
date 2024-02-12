import managing_director from "@assets/founders_message/managing_director.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
const FounderMassage = () => {
  return (
    <Container sx={{ mt: "90px" }}>
      <Typography
        variant="h2"
        sx={{
          color: "textWhite",
          borderBottom: "1px solid #FAF6E2",
          width: "fit-content",
          mx: "auto",
          px: "100px",
          pt: "16px",
        }}
      >
        <Box component="span" sx={{ color: "textAccent" }}>
          Founder's
        </Box>{" "}
        Vision
      </Typography>
      <Grid
        container
        sx={{
          mt: "120px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={3.8}>
          <Box
            component="img"
            src={managing_director}
            alt="managing"
            sx={{ width: 1, height: 1 }}
          />
        </Grid>
        <Grid item xs={7.9}>
          <Typography variant="caption2" sx={{ color: "textWhite" }}>
            Kausar Zaman Bappi
          </Typography>
          <Typography variant="body7" sx={{ color: "textWhite", pt: "8px" }}>
            Managing Director
          </Typography>
          <Typography variant="body4" sx={{ color: "textWhite", pt: "32px" }}>
            I would like to express my sincere thanks and profound appreciation
            to my customers such as Internet Services Providers,
            Telecommunication companies and Traders all over the company, who
            are providing us their continuous interest and support for
            sustainable development and progress of our country. ABS Cables
            manufactures excellent quality Optical Fiber Cables and is one of
            the pioneer companies to run full-fledged manufacturing operations
            in the Optical Fiber Cable arena. To maintain quality of our product
            and to meet the increasing demand. We are always trying our level
            best to enhance the production capacity of our factory
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FounderMassage;
