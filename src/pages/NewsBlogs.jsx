import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const NewsBlogs = () => {
  const [newsBlogs, setNewsBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./news&blogs.json");
        const data = await response.json();
        setNewsBlogs(data);
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
    <Container sx={{ mt: "90px", gap: "20px" }}>
      <Grid container sx={{ justifyContent: "center", gap: "45px" }}>
        <Grid item xs={11}>
          <Typography
            variant="h2"
            sx={{ color: "textWhite", textAlign: "center", pb: "40px" }}
          >
            Navigating the Latest{" "}
            <Box component="span" sx={{ color: "textAccent" }}>
              News & Blogs
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="body7"
            sx={{
              color: "textWhite",
              textAlign: "center",
              pt: "40px",
              borderTop: "1px solid #FAF6E2",
            }}
          >
            Welcome to our dynamic space where knowledge meets insight! Dive
            into the latest happenings, trends, and expert opinions in our News
            and Blog section. Whether you're seeking industry updates, tips and
            tricks, or thought-provoking articles, our curated content is
            designed to keep you in the know
          </Typography>
        </Grid>
        {loading ? (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "textAccent" }} />
          </Grid>
        ) : (
          <>
            {newsBlogs?.map(({ img, title, desc, details }, idx) => {
              return (
                <Grid key={idx} item xs={5.7} sx={{}}>
                  <Grid
                    container
                    sx={{ justifyContent: "space-between", height: "450px" }}
                  >
                    <Grid item xs={5.5}>
                      <Box
                        component="img"
                        sx={{
                          width: 1,
                          height: 1,
                          border: "20px solid rgba(255, 251, 227, 0.20)",
                        }}
                        src={img}
                        alt={title}
                      />
                    </Grid>
                    <Grid item xs={6.2}>
                      <Box className="card">
                        <Box className="content">
                          <Box className="front">
                            <Typography
                              variant="body7"
                              className="title"
                              sx={{ color: "textWhite" }}
                            >
                              {title}
                            </Typography>
                            <Typography
                              variant="body4"
                              className="subtitle"
                              sx={{ color: "textWhite" }}
                            >
                              {desc}
                            </Typography>
                            <Typography
                              variant="body4"
                              className="vews-details"
                              sx={{
                                bgcolor: "textAccent",
                                px: "15px",
                                py: "2px",
                                borderRadius: "10px",
                              }}
                            >
                              View Details
                            </Typography>
                          </Box>
                          <Box className="back">
                            <Typography
                              variant="body4"
                              className="description"
                              sx={{ color: "textWhite" }}
                            >
                              {details}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default NewsBlogs;
