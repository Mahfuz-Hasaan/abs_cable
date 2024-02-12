import chooseabs from "@assets/about/choose.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
const ChooseAbs = () => {
  return (
    <Container sx={{ mt: "100px" }}>
      <Typography
        variant="h5"
        sx={{ color: "textWhite", textAlign: "center", pb: "24px" }}
      >
        Why choose ABS Cables LTD
      </Typography>
      <Box sx={{ width: "fit-content", mx: "auto" }}>
        <Box
          component="img"
          src={chooseabs}
          sx={{ width: "60px", height: "auto" }}
        />
      </Box>

      <Grid
        container
        sx={{
          py: "50px",
          borderTop: "1px solid #FAF6E2",
          mt: "70px",
        }}
      >
        <Grid item xs={6} sx={{ borderRight: "1px solid #FAF6E2", pr: "50px" }}>
          <Typography variant="body7" sx={{ color: "textWhite", pt: "20px" }}>
            When you choose ABS Cables Ltd., you're choosing top-rated optical
            fiber cables, the best quality in the industry, and affordable
            prices that won't break the bank. Join the ranks of satisfied
            customers who have experienced the excellence of our products.
            Upgrade your connectivity with ABS Cables Ltd. today! ABS Cables
            Limited provides all possible facilities to the crew members to keep
            them motivated to ensure the best productivity of the team
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography
            variant="body7"
            sx={{ color: "textWhite", pl: "50px", pt: "20px" }}
          >
            ABS cables is one of the leading optical fiber cable manufacturing
            companies in Bangladesh. Keeping in mind the customer satisfaction
            as our top priority, we aim to be one of the top fiber cables
            company worldwide
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseAbs;
