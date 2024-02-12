import relaiableImg1 from "@assets/about/relaiable_abs1.webp";
import relaiableImg2 from "@assets/about/relaiable_abs2.webp";
import relaiableImg3 from "@assets/about/relaiable_abs3.webp";
import relaiableImg4 from "@assets/about/relaiable_abs4.webp";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ReliableAbs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabTitle = [
    "Objective",
    "Quality Assurance",
    "Certificate",
    "Benefits",
  ];
  const tabDetails = [
    {
      contents: [
        "Manufacturer's warranty for peace of mind",
        "Flexible cables for versatile installations",
        "Engineered for durability and reliability",
        "Designed to perform in diverse environments",
        "Internationally recognized cable certificates",
        "Premium quality materials for long-lasting use",
      ],
      img: relaiableImg1,
    },
    {
      contents: [
        "Extended manufacturer's warranty",
        "Highly flexible cables for easy handling",
        "Precision engineering ensures durability",
        "Versatile design suitable for all installations",
        "Globally recognized cable certificates",
        "Constructed with premium quality materials",
      ],
      img: relaiableImg2,
    },
    {
      contents: [
        "Quality assurance with manufacturer's warranty",
        "Flexible cables for easy and efficient installation",
        "Engineered for lasting durability and reliability",
        "Versatile performance in various installations",
        "Internationally certified cables",
        "Premium-grade materials for superior quality",
      ],
      img: relaiableImg3,
    },
    {
      contents: [
        "Manufacturer's warranty for added assurance",
        "Highly flexible cables for easy handling",
        "Precision engineering for durability and reliability",
        "Suitable for diverse installation scenarios",
        "Internationally recognized cable certificates",
        "Constructed with premium quality materials",
      ],
      img: relaiableImg4,
    },
  ];

  return (
    <Box sx={{ mt: "120px" }}>
      <Container>
        <Typography variant="h6" sx={{ color: "textWhite" }}>
          We are a reliable ABS Cables LTD
        </Typography>
        <Box>
          <Tabs
            TabIndicatorProps={{
              sx: {
                backgroundColor: "transparent",
              },
            }}
            sx={{
              "& button": {
                borderWidth: "1px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(145deg, #F5D010 13.2%, rgba(10, 10, 44, 0.50) 87.21%) 1",
              },
              "& button:hover": {
                background:
                  "linear-gradient(109deg, #0F0F32 12.93%, rgba(32, 29, 48, 0.80) 45.24%, #F5D010 87.21%)",
              },
              "& button.Mui-selected": {
                background:
                  "linear-gradient(109deg, #0F0F32 12.93%, rgba(32, 29, 48, 0.80) 45.24%, #F5D010 87.21%)",
                boxShadow: "6px 10px 8px 0px #000",
                color: "textBlack",
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              },
              "& .MuiTabs-flexContainer": {
                gap: "40px",
              },
              pt: "40px",
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabTitle?.map((item, idx) => {
              return (
                <Tab
                  sx={{ mb: "40px" }}
                  key={idx}
                  label={
                    <Typography
                      variant="tabTitle1"
                      sx={{
                        color: "textWhite",
                        zIndex: 9999,
                        textTransform: "capitalize",
                        px: "5px",
                      }}
                      {...a11yProps(idx)}
                    >
                      {item}
                    </Typography>
                  }
                />
              );
            })}
          </Tabs>
        </Box>

        {tabDetails?.map(({ contents, img }, idx) => {
          return (
            <CustomTabPanel key={idx} value={value} index={idx}>
              <Grid
                sx={{
                  justifyContent: "space-between",
                  alignItems: "end",
                  position: "relative",
                }}
                key={idx}
                container
              >
                <Grid item xs={8}>
                  <Box
                    sx={{
                      bgcolor: "tertiary.main",
                      p: "35px 30px 48px 67px",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography
                      variant="caption3"
                      sx={{
                        borderBottom: "2px solid #595A5A",
                        width: "fit-content",
                        pb: "20px",
                        px: "10px",
                      }}
                    >
                      Obejctive
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        pt: "40px",
                      }}
                    >
                      {contents.map((item, idx) => {
                        return (
                          <Box
                            key={idx}
                            component="li"
                            sx={{ listStyleType: "" }}
                          >
                            <Typography
                              variant="body5"
                              sx={{ color: "textBlack" }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  sx={{ position: "absolute", right: "8%", top: "17%" }}
                  item
                  xs={4}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{ width: 1, height: "auto" }}
                  />
                </Grid>
              </Grid>
            </CustomTabPanel>
          );
        })}
      </Container>
    </Box>
  );
};

export default ReliableAbs;
