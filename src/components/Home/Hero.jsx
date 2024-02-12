import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero = () => {
  const [hero, setHero] = useState([]);
  const [activeImg, setActiveImg] = useState();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch("./hero.json");
        const data = await res.json();
        setHero(data);
        data?.length > 0 && setActiveImg(data[0].img);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchedData();
  }, []);

  return (
    <Box>
      {activeImg && (
        <Grid
          container
          sx={{
            justifyContent: "end",
            alignItems: "end",
            pt: "150px",
            height: "85vh",
            backgroundImage: `url(${activeImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
                  backgroundColor: "color2.main",
                  border: "1px solid #000",
                },
                "& .swiper-pagination-bullet": {
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#F5D010",
                },
                "& .swiper-slide": {
                  "& .swiper-slide-active": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <Swiper
                style={{ paddingBottom: "40px" }}
                slidesPerView={3}
                spaceBetween={15}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                rewind={true}
                pagination={{ dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                onSlideChange={(swiper) => {
                  setActiveImg(hero[swiper.activeIndex].img);
                }}
              >
                {hero?.map(({ img, subImg }, idx) => (
                  <SwiperSlide key={idx}>
                    <Box>
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "95%",
                            xl: "75%",
                          },
                          height: "auto",
                          border: "3px solid #F5D010",
                          borderRadius: "6px",
                          borderImage: "#F5D010",
                        }}
                        src={subImg}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Hero;
