import story_card1 from "@assets/home/story-card1.webp";
import story_card2 from "@assets/home/story-card2.webp";
import story_card3 from "@assets/home/story-card3.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowButton from "@shared/ArrowButton";
import { Link } from "react-router-dom";

const OurStory = () => {
  const cardInfo = [
    {
      id: "1",
      img: story_card1,
      title: "Quality of Optical Fiber Products",
      contents:
        "A reputable optical fiber company places a strong emphasis on the quality of its products.",
    },
    {
      id: "2",
      img: story_card2,
      title: "Innovation Technological  Advancements",
      contents:
        "A leading optical fiber company is characterized by its commitment to innovation and staying at the forefront of technological advancements.",
    },
    {
      id: "1",
      img: story_card3,
      title: "Comprehensive Services & Support",
      contents:
        "Beyond manufacturing and supplying optical fiber products, a top-tier optical fiber company offers comprehensive services and support.",
    },
  ];
  return (
    <Box sx={{ mt: "80px" }}>
      <Box sx={{ borderBottom: "1px solid #fff" }}>
        <Container sx={{ pb: "20px" }}>
          <Typography variant="caption1" sx={{ color: "textWhite" }}>
            When you choose ABS Cables Ltd, you're choosing top rated optical
            fiber cables, the best quality in the industry, and affordable
            prices that won't break the bank
          </Typography>
        </Container>
      </Box>
      <Container>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item xs={9}>
            <Typography
              variant="body4"
              sx={{ color: "textWhite", pt: "40px", pb: "48px" }}
            >
              Join the ranks of satisfied customers who have experienced the
              excellence of our products. Develop cables embedded with sensors
              or smart technology. Upgrade your connectivity with ABS Cables
              Ltd. today!
            </Typography>
            <Box component={Link} to="/mission-&-vission">
              <ArrowButton title="Our Story" btnVariant="btnWhite" />
            </Box>
          </Grid>
          {cardInfo?.map(({ img, title, contents }, idx) => {
            return (
              <Grid sx={{ mt: "120px" }} key={idx} item xs={3.9}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: idx === 1 ? "column-reverse" : "column",
                    transition: "all 1s ease-in-out",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    "&:hover": {
                      "& .img": {
                        transform: "scale(1.1)",
                        transition: "all 1s ease-in-out",
                      },
                      "& .title": {
                        borderTop:
                          idx === 1
                            ? "8px solid #F5D010"
                            : "0px solid transparent",
                        borderRight: "8px solid #F5D010",
                        borderBottom:
                          idx === 0 || idx === 2
                            ? "8px solid #F5D010"
                            : "0px solid #F5D010",
                      },
                      "& .content": {
                        bgcolor: "rgba(15, 15, 50, 0.60)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        zIndex: 0,
                        height: 1,
                        width: 1,
                        opacity: "100%",
                        px: "40px",
                        transition: "all 1s ease-in-out",
                      },
                    },
                  }}
                >
                  <Box sx={{ height: "448px", position: "relative" }}>
                    <Box
                      className="img"
                      sx={{ width: 1, height: 1 }}
                      component="img"
                      src={img}
                      alt={title}
                    />
                  </Box>
                  <Box
                    className="content"
                    sx={{
                      display: "none",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "textWhite" }}>
                      {contents}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body7"
                    className="title"
                    sx={{
                      textAlign: "center",
                      py: "40px",
                      bgcolor: "tertiary.main",
                      transition: "all 0.5s ease",
                      zIndex: 1,
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurStory;
