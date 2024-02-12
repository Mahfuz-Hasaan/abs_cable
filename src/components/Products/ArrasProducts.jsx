import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const ArrasProducts = () => {
  const accordioncontents = [
    {
      title: "Sources of Raw Materials",
      contents: [
        "HDPE - World Renowned  Company, Borouge, UAE",
        "Fiber - South Korea, China",
        "Fiber Optic Gel - A World Renowned Company of China",
        "PBT - China",
        "Marking Tape - China",
        "FRP Rod - India",
      ],
    },
    {
      title: "Machineries & Equipment Origin",
      contents: ["SIEMENS, German Technology (Germany)", "China and India"],
    },
    {
      title: "International Partners",
      contents: ["Shanghai Waye Import and Export Co. Ltd, China"],
    },
  ];
  return (
    <Container>
      <Grid container sx={{ mt: "120px", justifyContent: "center" }}>
        <Grid item xs={10}>
          <Typography
            variant="h2"
            sx={{ color: "textWhite", textAlign: "center" }}
          >
            <Box sx={{ color: "textAccent" }} component="span">
              Factory's
            </Box>{" "}
            Diverse Arras of{" "}
            <Box sx={{ color: "textAccent" }} component="span">
              Products
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={7.5}>
          <Typography
            variant="body6"
            sx={{
              color: "textWhite",
              textAlign: "center",
              py: "40px",
              px: "10px",
              mt: "40px",
              borderTop: "1px solid #FAF6E2",
            }}
          >
            The dream of a digital Bangladesh is taking shape with companies
            ushering in new era of technology. To become one of the best
            companies in the optical fiber cable industry with the support of
            satisfied customers from around the world
          </Typography>
        </Grid>
        {accordioncontents?.map(({ title, contents }, idx) => {
          return (
            <Grid key={idx} item xs={10} sx={{ pb: "30px" }}>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "2px solid #F5D010",
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: "secondary.main",
                  }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="caption3"
                    sx={{ color: "textBlack", py: "10px" }}
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      "& li::marker": {
                        color: "#fff",
                        fontSize: "1.5rem",
                      },
                    }}
                    component="ul"
                  >
                    {contents?.map((content, idx) => (
                      <Box key={idx} component="li">
                        <Typography
                          sx={{ color: "textWhite" }}
                          variant="body7"
                          key={idx}
                        >
                          {content}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ArrasProducts;
