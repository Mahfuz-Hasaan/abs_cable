import ShortcutIcon from "@mui/icons-material/Shortcut";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";

const ServicesGuideline = () => {
  const contents = [
    {
      title: "Fiber Optic Cable",
      desc: "The 'Installation and Deployment' services offered by an optical cable company involve the expert implementation and setup of optical fiber cables in various environments. Providing expertise in installing and deploying optical fiber cables in different environments, whether for telecommunications, data centers, businesses, or residential purposes. Here's a breakdown of what these services typically encompass",
    },
    {
      title: "Fiber Optic Cable Manufacturing",
      desc: "Fiber optic cable manufacturing is the heartbeat of our optical fiber company, where cutting-edge technology converges with meticulous craftsmanship. This process involves transforming raw materials into high-quality, high-performance fiber optic cables that serve as the lifelines of modern connectivity. In the intricate dance of fiber optic cable manufacturing, our company stands as a beacon of quality, innovation, and reliability. With each cable that leaves our facility, we contribute to a world more seamlessly connected, empowered by the backbone of advanced optical communication",
    },
    {
      title: "Maintenance & Repair",
      desc: "Maintenance and repair services are pivotal in sustaining the longevity and performance of optical fiber networks. Our commitment to excellence extends beyond initial installations, providing comprehensive services to uphold the reliability of your optical infrastructure. In the dynamic landscape of optical fiber networks, our maintenance and repair services serve as a cornerstone for ensuring the longevity, reliability, and continued efficiency of your connectivity infrastructure. With a focus on excellence and a commitment to swift, effective interventions, we stand ready to support the seamless operation of your optical network",
    },
    {
      title: "Training & Education",
      desc: "Training and education are at the core of our commitment to advancing optical fiber technology. Our comprehensive programs aim to empower individuals and organizations with the knowledge and skills required to harness the full potential of optical networks. By investing in training and education, we not only empower individuals to excel in the realm of optical fiber technology but also contribute to the overall advancement of the industry. Our initiatives aim to build a knowledgeable and skilled workforce that drives innovation and excellence in optical communication",
    },
    {
      title: "Integration & Networking Solutions",
      desc: "Integration and networking solutions play a pivotal role in optimizing the performance of optical fiber technology, ensuring a cohesive and efficient communication infrastructure. Our company offers comprehensive services that seamlessly integrate optical networks into diverse environments while enhancing connectivity and operational efficiency. With a focus on seamless connectivity and efficient networking solutions, our integration services are geared towards creating robust, adaptive, and future-ready optical fiber networks that empower organizations to thrive in the digital era",
    },
  ];
  const [activeContents, setActiveContents] = useState(contents[0]);

  return (
    <Container sx={{ mt: "120px" }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "space-between",
              gap: "40px",
            }}
          >
            {contents?.map((content, idx) => {
              return (
                <Box key={idx} onClick={() => setActiveContents(content)}>
                  <Box
                    sx={{
                      border: "2px solid #F5D010",
                      borderRadius: "8px",
                      cursor: "pointer",
                      background:
                        activeContents?.title === content?.title
                          ? "rgba( 3, 3, 3, 0.25 )"
                          : "transparent",
                      boxShadow:
                        activeContents?.title === content?.title
                          ? "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
                          : "transparent",
                      p: "25px",
                      backdropFilter:
                        activeContents?.title === content?.title
                          ? "blur(20px)"
                          : "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      "& .icon": {
                        color:
                          activeContents?.title === content?.title
                            ? "primary.main"
                            : "primary.main",
                        backgroundColor:
                          activeContents?.title === content?.title
                            ? "secondary.main"
                            : "tertiary.main",
                      },
                      "&:hover": {
                        backgroundColor: "rgba( 3, 3, 3, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur(20px)",
                        "& .icon": {
                          color: "primary.main",
                          backgroundColor: "secondary.main",
                          transition: "all 0.3s linear",
                        },
                        transition: "all 0.3s linear",
                      },
                    }}
                  >
                    <Typography
                      variant="caption3"
                      sx={{
                        color: "textWhite",
                      }}
                    >
                      {content?.title}
                    </Typography>

                    <ShortcutIcon
                      className="icon"
                      sx={{
                        borderRadius: "50%",

                        fontSize: "40px",
                        p: "8px",
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid
          item
          xs={6.5}
          sx={{
            border: "2px solid #F5D010",
            borderRadius: "8px",
            background: "rgba( 3, 3, 3, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 8px )",
          }}
        >
          {activeContents && (
            <Box sx={{ p: "45px 40px 50px 25px" }}>
              <Typography variant="h6" sx={{ color: "textAccent" }}>
                {activeContents?.title}
              </Typography>
              <Typography variant="body7" sx={{ color: "textWhite" }}>
                {activeContents?.desc}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesGuideline;
