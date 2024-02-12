import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import best_quality from "../../assets/home/best_quality.webp";
import low_cost from "../../assets/home/low_cost.webp";
import top_related from "../../assets/home/top_related.webp";
const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 12, textAlign: "center" }}>{children}</Box>
      )}
    </Box>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WhatweDo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabContent = [
    {
      id: "1",
      content:
        "At ABS Cables Ltd, we take immense pride in being recognized as  a top- rated provider of Optical Fiber Cables. Our commitment to quality and customer satisfaction has earned us this distinction, and we continue to strive for excellence in everything we do. The dream of a digital Bangladesh is taking shape with companies ushering in new era of technology. We take immense pride in being recognized as a top-rated provider of Optical Fiber Cables.",
      img: top_related,
    },
    {
      id: "2",
      content:
        "ABS Cable Ltd is marked by reliability, durability, and technical expertise. The company prioritize innovation, comply with industry standards, and implement stringent quality control measures. Offering customization options, they are environmentally responsible and provide excellent customer support. A positive industry reputation is a testament to their commitment to delivering high-quality cable solutions.",
      img: best_quality,
    },
    {
      id: "3",
      content:
        "ABS Cable Ltd  specialize in affordability without compromising essential features. They optimize manufacturing processes, use economical materials, and focus on basic product ranges. The company often offer bulk discounts, leverage online sales channels, and target cost-conscious markets while maintaining responsive customer service and delivering value for money.",
      img: low_cost,
    },
  ];
  const tabOptions = [
    {
      id: "1",
      title: "TOP RATED",
    },
    {
      id: "2",
      title: "BEST QUALITY",
    },
    {
      id: "3",
      title: "LOW COST",
    },
  ];
  return (
    <Container sx={{ mt: "500px" }}>
      <Grid container sx={{ justifyContent: "end" }}>
        <Grid item xs={12}>
          <Box sx={{ mb: "170px", maxWidth: "640px" }}>
            <Typography variant="h6" sx={{ color: "textWhite" }}>
              What We Do
            </Typography>
            <Typography variant="body7" sx={{ color: "textWhite" }}>
              An optical fiber is a flexible transparent fiber made by drawing
              glass to a diameter slightly thicker than human hair. The dream of
              a digital Bangladesh is taking shape with companies ushering in
              new era of technology. Meet ABS Cables which is revolutionizing
              how we think about connectivity through optical fibers
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: "tertiary.main",
            borderRadius: "8px",
            zIndex: 999,
            height: "500px",
            ml: "70px",
            "@media (max-width: 768px)": {
              width: "100%",
              ml: "0px",
            },
          }}
        >
          <Box sx={{ borderColor: "divider" }}>
            <Tabs
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#000",
                },
              }}
              sx={{
                "& button": {
                  borderBottom: "2px solid #000",
                },
                "& button:hover": {
                  backgroundColor: "secondary.main",
                },
                "& button.Mui-selected": {
                  backgroundColor: "secondary.main",
                  color: "textBlack",
                },
                "& .MuiTabs-flexContainer": {
                  gap: "40px",
                },
                pt: "40px",
              }}
              centered
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabOptions?.map(({ title }, idx) => {
                return (
                  <Tab
                    key={idx}
                    label={<Typography variant="body4">{title}</Typography>}
                    {...a11yProps(idx)}
                  />
                );
              })}
            </Tabs>
          </Box>
          <Box>
            {tabContent?.map(({ content, img }, idx) => {
              return (
                <CustomTabPanel key={idx} value={value} index={idx}>
                  <Typography variant="body3">{content}</Typography>
                </CustomTabPanel>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ mt: "-100px", ml: "-70px" }}>
          <Box
            component="img"
            src={tabContent[value]?.img}
            alt={`Tab ${value + 1}`}
            sx={{
              width: "80%",
              height: "auto",
              zIndex: 0,
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatweDo;
