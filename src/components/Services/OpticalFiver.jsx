import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
const OpticalFiver = () => {
  const accordioncontents = [
    {
      title: "Single Mode Optical Fiber",
      contents:
        "Single-mode optical fiber (SMF) features a small core that allows only one mode of light transmission. It is ideal for long-distance data transmission due to lower dispersion and attenuation. Commonly used in telecommunications and data centers, SMF supports high data rates and requires precise installation for optimal performance. Its applications include long-haul networks, backbone connections, and scenarios where high bandwidth and extended reach are essential",
    },
    {
      title: "Multi Mode Optical Fiber",
      contents:
        "Single-mode optical fiber (SMF) features a small core that allows only one mode of light transmission. It is ideal for long-distance data transmission due to lower dispersion and attenuation. Commonly used in telecommunications and data centers, SMF supports high data rates and requires precise installation for optimal performance. Its applications include long-haul networks, backbone connections, and scenarios where high bandwidth and extended reach are essential",
    },
    {
      title: "Plastic Optical Fiber",
      contents:
        "Single-mode optical fiber (SMF) features a small core that allows only one mode of light transmission. It is ideal for long-distance data transmission due to lower dispersion and attenuation. Commonly used in telecommunications and data centers, SMF supports high data rates and requires precise installation for optimal performance. Its applications include long-haul networks, backbone connections, and scenarios where high bandwidth and extended reach are essential",
    },
  ];
  return (
    <>
      <Box sx={{ bgcolor: "primary.main", mt: "120px" }}>
        <Container>
          <Typography variant="body7" sx={{ color: "textWhite", py: "50px" }}>
            There are primarily three types of optical fibers based on the
            number of modes of light they can support. The classification is
            based on the structure of the fiber core and its ability to transmit
            light in different modes.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mt: "60px" }}>
        {accordioncontents?.map(({ title, contents }, idx) => {
          return (
            <Accordion
              key={idx}
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                borderBottom: "2px solid #FAF6E2",

                mt: "50px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "tertiary.main" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="caption3"
                  sx={{ color: "textAccent", py: "10px" }}
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "textWhite", pb: "20px" }}
                  variant="body4"
                >
                  {contents}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </>
  );
};

export default OpticalFiver;
