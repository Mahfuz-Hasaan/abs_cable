import { Box, Container, Grid, Typography } from "@mui/material";
const Users = () => {
  const user = [
    "Bangladesh ICT",
    "Telecommunication, ISP, GSM & NTTN",
    "Corporate",
    "Broadcasting & Television",
    "Data Centers",
    "Military & Aerospace",
    "Research & Development",
  ];
  return (
    <Box sx={{ mt: "120px" }}>
      <Box
        sx={{ bgcolor: "rgba( 3, 3, 3, 0.25 )", backdropFilter: "blur(10px)" }}
      >
        <Container>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={10}>
              <Typography
                variant="body6"
                sx={{
                  color: "textWhite",
                  textAlign: "center",
                  py: "76px",
                }}
              >
                OFC used in multiple sectors.Optical fiber is used in a variety
                of applications across different industries due to its ability
                to transmit data over long distances with high bandwidth and
                reliability.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ mt: "80px" }}>
        <Grid container sx={{ justifyContent: "center", gap: "15px" }}>
          {user?.map((item, idx) => {
            return (
              <Grid key={idx} item xs={2.8}>
                <Typography
                  variant="body7"
                  sx={{
                    border: "1px solid #F5D010",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: "30PX",
                    color: "textAccent",
                    borderRadius: "8px",
                    height: "150px",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "textBlack",
                      transition: "all 0.3s linear",
                    },
                  }}
                >
                  {item}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Users;
