import { Box, Container, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const SpecifiqOfferings = () => {
  const contents = [
    {
      title: "High Quality Work",
      desc: "Lorem ipsum dolor sit amet consectetur. Diam ultrices ation ryolm on ipsum eu mollis vel ultricies morbi eget. Feugiat erat a sed sit hendrer. Egestas commodo purus mauris tristique posuere suscipit. Nunc on the condimentum vitae dui id at turpis non pulvinar.",
    },
    {
      title: "Competitive Price",
      desc: "Lorem ipsum dolor sit amet consectetur. Diam ultrices ation ryolm on ipsum eu mollis vel ultricies morbi eget. Feugiat erat a sed sit hendrer. Egestas commodo purus mauris tristique posuere suscipit. Nunc on the condimentum vitae dui id at turpis non pulvinar.",
    },
    {
      title: "Good Service Mantain",
      desc: "Lorem ipsum dolor sit amet consectetur. Diam ultrices ation ryolm on ipsum eu mollis vel ultricies morbi eget. Feugiat erat a sed sit hendrer. Egestas commodo purus mauris tristique posuere suscipit. Nunc on the condimentum vitae dui id at turpis non pulvinar.",
    },
  ];
  return (
    <Container sx={{ mb: "100px", mt: "280px" }}>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Grid item xs={5.5}>
          <Typography variant="h4" sx={{ color: "textWhite", pb: "20px" }}>
            Specific qualities
          </Typography>
          <Typography variant="h4" sx={{ color: "textWhite" }}>
            we are{" "}
            <Typography
              component="span"
              variant="h2"
              sx={{
                color: "textBlack",
                bgcolor: "secondary.main",
                py: "23px",
                px: "18px",
                borderRadius: "6px",
              }}
            >
              offerings
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
                backgroundColor: "red",
                border: "1px solid #A35715",
              },
              "& .swiper-pagination-bullet": {
                height: {
                  lg: "10px",
                  xs: "8px",
                },

                width: {
                  lg: "10px",
                  xs: "8px",
                },
                backgroundColor: "blue",
              },
            }}
          >
            <Swiper
              direction="vertical"
              loop={true}
              mousewheel={true}
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Mousewheel]}
              className="mySwiper"
              style={{
                height: "380px",
              }}
            >
              {contents?.map(({ title, desc }, idx) => {
                return (
                  <SwiperSlide style={{ borderRadius: "10px" }} key={idx}>
                    <Box
                      sx={{
                        bgcolor: "tertiary.main",
                        px: "80px",
                        pt: "50px",
                        pb: "80px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography variant="caption2" sx={{ pb: "30px" }}>
                        {title}
                      </Typography>
                      <Typography variant="body6">{desc}</Typography>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpecifiqOfferings;
