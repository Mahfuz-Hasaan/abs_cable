import { Box, Container, Grid, Typography } from "@mui/material";

const Achivement = () => {
  const info = [
    {
      id: "1",
      info1: "1953",
      info2: "Established",
    },
    {
      id: "2",
      info1: "52",
      info2: "Total products",
    },
    {
      id: "3",
      info1: "128",
      info2: "Major Clients",
    },
    {
      id: "4",
      info1: "109",
      info2: "Awards",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "tertiary.main", mt: "120px" }}>
      <Container>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {info?.map(({ info1, info2 }, idx) => {
            return (
              <Grid key={idx} item xs={3}>
                <Box
                  sx={{
                    borderLeft: "2px solid #595A5A",
                    my: "70px",
                    pl: "20px",
                  }}
                >
                  <Typography variant="h3">{info1}</Typography>
                  <Typography variant="h7">{info2}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achivement;
