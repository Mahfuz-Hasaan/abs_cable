import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const MissionVision = () => {
  return (
    <Container sx={{ mt: "60px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={8} sx={{ borderBottom: "1px solid #FAF6E2" }}>
          <Typography
            variant="h2"
            sx={{ color: "textWhite", textAlign: "center", pb: "32px" }}
          >
            Mission{" "}
            <Box component="span" sx={{ color: "textAccent" }}>
              &
            </Box>{" "}
            Vision
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ mt: "32px" }}>
          <Typography
            variant="body7"
            sx={{ color: "textWhite", textAlign: "center", pb: "32px" }}
          >
            ABS cables strive to provide top-notch products at the most
            affordable rates with the support of loyal customers worldwide. On
            the other hand, we denounce with righteous indignation and dislike
            men who are so beguiled demoralized. The process control systems are
            being run by the most skilled and talented workers to yield top
            notch products.
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ mt: "50px" }}>
          <Box
            sx={{
              backgroundColor: "tertiary.main",
              px: "68px",
              py: "72px",
              borderRadius: "2px",
            }}
          >
            <Typography variant="h6" sx={{ color: "textBlack", pb: "24px" }}>
              Who We Are
            </Typography>

            <Typography variant="body6" sx={{ color: "textBlack", pb: "32px" }}>
              ABS cables strive to provide top-notch products at the most
              affordable rates with the support of loyal customers worldwide. On
              the other hand, we denounce with righteous indignation and dislike
              men who are so beguiled demoralized. The process control systems
              are being run by the most skilled and talented workers to yield
              top notch products.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MissionVision;
