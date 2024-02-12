import { Container, Divider, Grid, Typography } from "@mui/material";

const CorporateExcellence = () => {
  const contents = [
    {
      title: "Financial Performance",
      desc: "Strong financial performance, including revenue growth, profitability, and efficient cost management, is a critical factor",
    },
    {
      title: "Brand Reputation",
      desc: "A positive brand image and reputation play a crucial role in corporate value.Customer perception, public trust,are significant assets",
    },
    {
      title: "Corporate Responsibility",
      desc: "Companies that actively engage in CR initiatives and demonstrate a commitment to social and environmental responsibility often have a positive impact on their corporate value.",
    },
    {
      title: "Strategic Partnerships",
      desc: "Collaborations with other companies, strategic partnerships, and alliances can contribute to corporate value by expanding market reach, sharing resources, and fostering innovation",
    },
  ];
  return (
    <Container sx={{ mt: "120px" }}>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: "tertiary.main",
            borderWidth: "2px",
          },
        }}
      >
        <Typography variant="h6" sx={{ color: "textWhite" }}>
          Pioneering Unique Excellence in Optical Product Quality
        </Typography>
      </Divider>
      <Grid container sx={{ justifyContent: "space-between", mt: "48px" }}>
        {contents.map(({ title, desc }, idx) => {
          return (
            <Grid
              item
              xs={3}
              key={idx}
              sx={{
                border: "1px solid #F5D010",
                p: "15px",
                borderTopLeftRadius: idx === 0 ? "8px" : "0px",
                borderBottomLeftRadius: idx === 0 ? "8px" : "0px",
                borderBottomRightRadius: idx === 3 ? "8px" : "0px",
                borderTopRightRadius: idx === 3 ? "8px" : "0px",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(109deg, #F5D010 20.39%, rgba(32, 29, 48, 0.80) 70.97%, #0F0F32 87.21%)",
                  transition: "all 0.5s ease-in-out",
                },
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body7"
                sx={{
                  bgcolor: "tertiary.main",
                  width: "fit-content",
                  px: "16px",
                  borderRadius: "8px",
                  mt: "15px",
                }}
              >
                {idx + 1}
              </Typography>
              <Typography
                variant="caption3"
                sx={{ color: "textWhite", mt: "40px" }}
              >
                {title}
              </Typography>
              <Typography
                variant="body4"
                sx={{ color: "textWhite", mt: "20px" }}
              >
                {desc}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CorporateExcellence;
