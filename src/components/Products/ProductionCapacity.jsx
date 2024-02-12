import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ProductionCapacity = () => {
  const [productCap, setProductCap] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      const res = await fetch("./qualityCapacity.json");
      const data = await res.json();
      setProductCap(data);
    };
    fetchedData();
  }, []);

  return (
    <Box sx={{ mt: "120px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "textWhite",
          textAlign: "center",
          py: "76px",
          bgcolor: "rgba( 3, 3, 3, 0.25 )",
          backdropFilter: "blur(10px)",
        }}
      >
        Our Production Capacity is 200 KM Per Day
      </Typography>
      <Container sx={{ mt: "120px" }}>
        <Typography variant="h6" sx={{ color: "textWhite" }}>
          Quality products for every need
        </Typography>
        <Typography variant="body7" sx={{ color: "textWhite" }}>
          The company digitally prints its fiber cables. Even though this
          reduces their efficiency by 30%, it ensures that they are producing
          the highest quality optical fiber cable available in our country.
        </Typography>
        <Grid
          sx={{ justifyContent: "space-between", rowGap: "50px", mt: "50px" }}
          container
        >
          {productCap?.map(({ title, desc, img }, idx) => {
            return (
              <Grid
                item
                key={idx}
                xs={5.5}
                sx={{
                  background: "rgba( 3, 3, 3, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  borderTopLeftRadius: "10px",
                  borderEndStartRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: "280px",
                        height: 1,
                        border: "20px solid #FFFBE3",
                        // borderRadius: "10px",
                      }}
                      src={img}
                      alt={title}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderTop: "1px solid #FAF6E2",
                      borderBottom: "1px solid #FAF6E2",

                      p: "27px",
                    }}
                  >
                    <Typography variant="caption3" sx={{ color: "textWhite" }}>
                      {title}
                    </Typography>
                    <Typography variant="body4" sx={{ color: "textWhite" }}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductionCapacity;
