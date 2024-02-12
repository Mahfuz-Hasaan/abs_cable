import { Box, Container, Grid, Typography } from "@mui/material";

const UniqeClientele = () => {
  return (
    <Container sx={{ mt: "90px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <Typography
            variant="h2"
            sx={{
              color: "textWhite",
              textAlign: "center",
              borderBottom: "1px solid #FAF6E2",
              pb: "32px",
            }}
          >
            Crafting Unique{" "}
            <Box component="span" sx={{ color: "textAccent" }}>
              Clientele
            </Box>
          </Typography>
          <Typography
            variant="body7"
            sx={{ color: "textWhite", textAlign: "center", pt: "41px" }}
          >
            Clientele refers to the group of clients or customers that a
            business serves. It encompasses diverse individuals or organizations
            with varying needs. Building strong relationships is crucial,
            involving trust, excellent service, and personalized interactions.
            Businesses often target specific audiences, seeking to retain and
            expand their clientele through customer feedback, adaptability, and
            ethical practices.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UniqeClientele;
