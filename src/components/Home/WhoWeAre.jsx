import arrow from "@assets/home/arrow.webp";
import readmore from "@assets/home/read_more.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
const WhoWeAre = () => {
  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        height: "480px",
        position: "relative",
        pb: "580px",
      }}
    >
      <Container>
        <Grid container sx={{ justifyContent: "end" }}>
          <Grid item xs={12}>
            <Box sx={{ maxWidth: "600px" }}>
              <Typography sx={{ pt: "40px" }} variant="h6">
                Who We Are
              </Typography>
              <Typography variant="body4" sx={{ pt: "1px", pb: "45px" }}>
                ABS cables strive to provide top-notch products at the most
                affordable rates with the support of loyal customers worldwide.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${readmore})`,
                height: "492px",
                "@media (max-width: 768px)": {
                  height: "400px",
                },
                backgroundSize: "cover",
              }}
            >
              <Grid container>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      pl: "20px",
                      pt: "10px",
                    }}
                  >
                    <Typography variant="body7" sx={{ color: "textWhite" }}>
                      Read More
                    </Typography>
                    <Box
                      sx={{
                        width: "78%",
                        pt: "18px",
                        "@media (max-width: 768px)": {
                          // display: "none",
                        },
                      }}
                      component="img"
                      src={arrow}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    bgcolor: "tertiary.main",
                    borderRadius: "8px 0px 0px 8px",
                    position: "absolute",
                    right: "0",
                    top: "40%",
                    transform: "translateY(23%)",
                    "@media (max-width: 768px)": {
                      position: "initial",
                      // background: "#fff",
                      // left: "310px",
                      // top: "0px"
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: "80px 80px 80px 50px",
                      gap: "40px",
                    }}
                  >
                    <Typography variant="body4">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled demoralized. The process control systems
                      are being run by the most skilled and talented workers to
                      yield top notch products
                    </Typography>
                    <Typography variant="body4">
                      ABS cables is one of the leading optical fiber cable
                      manufacturing companies in Bangladesh. Keeping in mind the
                      customer satisfaction as our top priority, we aim to be
                      one of the top fiber cables company worldwide
                    </Typography>
                    <Typography variant="body4">
                      At ABS Cables Ltd., we take immense pride in being
                      recognized as a top-rated provider of Optical Fiber
                      Cables. Our commitment to quality and customer
                      satisfaction has earned us this distinction, and we
                      continue to strive for excellence in everything we do
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
