import img1 from "@assets/founders_message/img1.webp";
import img2 from "@assets/founders_message/img2.webp";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndustryPolymath = () => {
  const sliderContents = [
    {
      title: "Former Managing Director",
      exp1: "A.B.S. Knitex Ltd",
      exp2: "100% Export Oriented Yarn Dyeing Factory",
      img: img1,
      isFixed: "false",
    },
    {
      title: "Proprietor",
      exp1: "A.B.S. Trading House",
      exp2: "Importer, Exporter & Trader",
      img: img1,
      isFixed: "true",
    },
    {
      title: "Former Managing Director",
      exp1: "Tropical Knitex Ltd",
      exp2: "Knitex Composite Factory",
      img: img2,
      isFixed: "false",
    },
    {
      title: "Former Managing Director",
      exp1: "Jaimtex Ltd",
      exp2: "100% Export Oriented Terry Towel Factory",
      img: img2,
      isFixed: "false",
    },
    {
      title: "Former Managing Director",
      exp1: "Jaimtex Ltd",
      exp2: "100% Export Oriented Terry Towel Factory",
      img: img2,
      isFixed: "false",
    },
    {
      title: "Former Managing Director",
      exp1: "Jaimtex Ltd",
      exp2: "100% Export Oriented Terry Towel Factory",
      img: img2,
      isFixed: "false",
    },
  ];
  return (
    <Box sx={{ mt: "120px", px: "10px" }}>
      <Typography
        sx={{ color: "textWhite", textAlign: "center", pb: "48px" }}
        variant="h6"
      >
        The unparalleled expertise of a cable industry polymath
      </Typography>
      <Box
        sx={{
          "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
            backgroundColor: "color2.main",
            border: "1px solid #000",
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

            backgroundColor: "#F5D010",
            // backgroundImage:
            //   "linear-gradient(109deg, #F5D010 30.39%, rgba(32, 29, 48, 0.90) 25.97%, #F5D010 80.39%)",
          },
        }}
      >
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          style={{ paddingBottom: "60px" }}
        >
          {sliderContents.map(({ title, exp1, exp2, img, isFixed }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #fff",
                    p: "32px",
                    height: "450px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: 1,
                      height: "auto",
                    }}
                    src={img}
                    alt="img"
                  />
                  <Typography
                    sx={{ color: "textWhite", pt: "20px", pb: "20px" }}
                    variant="caption3"
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "textWhite" }} variant="body4">
                    {exp1}
                  </Typography>
                  <Typography sx={{ color: "textWhite" }} variant="body4">
                    {exp2}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      {/* <Box
        sx={{
          backgroundColor: "rgba(255, 251, 227, 0.20)",
          backdropFilter: "blur(20px)",
          py: "40px",
          mt: "80px",
        }}
      >
        <Typography
          sx={{
            maxWidth: "450px",
            textAlign: "center",
            mx: "auto",
            color: "textWhite",
          }}
          variant="caption3"
        >
          Empowering Connectivity, Illuminating Futures. Your World at the Speed
          of Light
        </Typography>
      </Box> */}
    </Box>
  );
};

export default IndustryPolymath;
