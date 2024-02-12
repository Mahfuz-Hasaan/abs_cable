import { Box, Container, Grid, Typography } from "@mui/material";

const Comprehensive = () => {
  return (
    <Container sx={{ mt: "90px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <Typography
            variant="h2"
            sx={{
              color: "textWhite",
              borderBottom: "1px solid #FAF6E2",
              textAlign: "center",
              pb: "30px",
            }}
          >
            Comprehensive
            <Box component="span" sx={{ color: "textAccent", pl: "25px" }}>
              Services
            </Box>
          </Typography>
          <Typography
            variant="body7"
            sx={{ color: "textWhite", textAlign: "center", pt: "40px" }}
          >
            By offering a comprehensive suite of services, an optical fiber
            website can position itself as a one-stop solution for clients,
            addressing their needs from consultation to ongoing support, and
            ensuring the success of their optical fiber projects.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Comprehensive;
