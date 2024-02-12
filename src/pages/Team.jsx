import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./teams.json");
        const data = await response.json();
        setMembers(data);
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
    <Container sx={{ mt: "120px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <Typography
            variant="h2"
            sx={{
              color: "textAccent",
              textAlign: "center",
              borderBottom: "2px solid #FAF6E2",
              pb: "40px",
            }}
          >
            Team{" "}
            <Box component="span" sx={{ color: "textWhite" }}>
              Members
            </Box>
          </Typography>
          <Typography
            variant="body7"
            sx={{ color: "textWhite", textAlign: "center", pt: "40px" }}
          >
            Effective teams often consist of members who possess various skill
            sets, including technical skills relevant to the project or task at
            hand, as well as soft skills like communication, problem solving,
            leadership, and adaptability
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "space-between", rowGap: "30px", mt: "120px" }}
      >
        {loading ? (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "textAccent" }} />
          </Grid>
        ) : (
          <>
            {members?.map(({ img, name, designation }, idx) => {
              return (
                <Grid
                  key={idx}
                  item
                  xs={3.8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",

                    height: "420px",
                    backgroundColor: "primary.main",
                    mt:
                      idx === 1 || idx === 4 || idx === 7 || idx === 10
                        ? "40px"
                        : "0px",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 12px 4px #F5D010",
                      transform: "scale(1.1)",
                      transition: "all .6s ease-in-out",
                    },
                    transition: "all .6s ease-in-out",
                  }}
                >
                  <Box sx={{ px: "100px" }}>
                    <Box
                      component="img"
                      sx={{ width: 1, height: 1 }}
                      src={img}
                      alt={name}
                    />
                  </Box>
                  <Typography variant="body7" sx={{ color: "textWhite" }}>
                    {name}
                  </Typography>
                  <Typography sx={{ color: "textWhite" }} variant="body4">
                    {designation}
                  </Typography>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Team;
