import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./client.json");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ mt: "120px" }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: "textAccent" }} />
        </Box>
      ) : (
        <Container>
          <Grid container sx={{ justifyContent: "center", gap: "28px" }}>
            {clients?.map(({ img }, idx) => {
              return (
                <Grid item xs={2.8} key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: "5px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 251, 227, 0.20)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{ width: "150px", height: 1 }}
                      src={img}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default ClientList;
