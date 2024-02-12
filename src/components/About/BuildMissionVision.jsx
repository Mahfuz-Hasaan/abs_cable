import missionImg from "@assets/about/mission.webp";
import visionImg from "@assets/about/vision.webp";

import { Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
const BuildMissionVision = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabTitle = ["Missions", "Visions"];
  const tabDetails = [
    {
      contents:
        "To become one of the best companies in the optical fiber cable industry with the support of satisfied customers from around the world. A powerful vision inspires innovation, attracts like-minded people, and shapes a resilient culture. It's not just a statement; it's the compass that steers the company through challenges, ensuring it stays true to its core values while pursuing greatness",
      img: missionImg,
    },
    {
      contents:
        "To emerge as a premier leader in the optical fiber cable industry, backed by the unwavering endorsement of contented customers globally. Our potent vision serves as the catalyst for innovation, drawing in kindred spirits, and fostering a resilient culture. More than just words, it's a guiding force navigating the company through trials, assuring unwavering adherence to core values while relentlessly pursuing excellence",
      img: visionImg,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        mt: "120px",
        pt: "120px",
        pb: "80px",
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ color: "textWhite", pb: "40px" }}>
          How We Build Our Missions & Visions
        </Typography>
        <Box>
          <Tabs
            sx={{
              "& button": {
                borderWidth: "1px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(145deg, #F5D010 13.2%, rgba(10, 10, 44, 0.50) 87.21%) 1",
              },
              "& button:hover": {
                background:
                  "linear-gradient(109deg, #F5D010 13.2%, rgba(10, 10, 44, 0.50) 87.21%)",
              },
              "& button.Mui-selected": {
                background:
                  "linear-gradient(109deg, #F5D010 13.2%, rgba(10, 10, 44, 0.50) 87.21%)",
                color: "textBlack",
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
                sx={{ justifyContent: "space-between", alignItems: "center" }}
                key={idx}
                container
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    borderTop: "1px solid #FAF6E2",
                    borderBottom: "1px solid #FAF6E2",
                  }}
                >
                  <Typography
                    variant="body7"
                    sx={{ color: "textWhite", py: "31px" }}
                  >
                    {contents}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Box component="img" src={img} sx={{ width: 1, height: 1 }} />
                </Grid>
              </Grid>
            </CustomTabPanel>
          );
        })}
      </Container>
    </Box>
  );
};

export default BuildMissionVision;
