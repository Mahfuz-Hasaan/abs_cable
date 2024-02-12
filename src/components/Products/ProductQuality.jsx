import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";

const ProductQuality = () => {
  const qualityContents = [
    {
      title: "High Quality Work",
      contents:
        "A high-quality optical fiber product excels in performance, durability, and adaptability to modern communication needs. Key features include low attenuation, excellent dispersion characteristics, reliability, tight buffering for protection, compatibility with various connectors, ease of installation, and compliance with industry standards. It should support high bandwidth, low latency, and emerging technologies like 5G and IoT. The product's design should consider UV and fire resistance, eco - friendly materials, and comprehensive testing for reliability and longevity. A high-quality optical fiber product should not only meet but exceed industry standards, providing a reliable and future-proof solution for the evolving needs of telecommunications and data transmission networks",
    },
    {
      title: "Latest Technology",
      contents:
        "In the ever-evolving landscape of technology, optical fiber companies are at the forefront of innovation, pushing the boundaries of what's possible in data transmission and connectivity. Let's delve into the latest technological advancements that are reshaping the optical fiber industry and paving the way for a new era of faster, more reliable communication. The latest technological advancements in the optical fiber industry are ushering in a new era of connectivity. From multi-core fiber technology to advanced modulation techniques and the integration of artificial intelligence, these innovations are not just meeting the current demands for high-speed and reliable communication but are also laying the foundation for a future where optical fiber networks play an even more pivotal role in our interconnected world",
    },
    {
      title: "Satisfaction Guarantee",
      contents:
        "At ABS Cables Ltd, we understand that a reliable and robust network is essential for our clients. Our commitment to providing top-notch optical fiber solutions is not just a promise; it's a guarantee. Introducing our Satisfaction Guarantee – a testament to our confidence in the quality and performance of our products and services. Our Satisfaction Guarantee is more than a promise – it's a reflection of our unwavering commitment to your satisfaction. We believe in the quality, reliability, and performance of our optical fiber solutions, and we are dedicated to ensuring that your experience with us exceeds your expectations. Choose [Company Name] with confidence, knowing that your connectivity needs are backed by a guarantee that places your satisfaction at the forefront of everything we do1",
    },
    {
      title: "Competitive Price",
      contents:
        "We recognize that in today's dynamic market, value matters. That's why we are proud to offer competitive pricing on our state-of-the-art optical fiber solutions. We understand that cost efficiency is a key consideration for our clients, and our commitment is to provide unparalleled value without compromising on the quality and performance of our products. We believe that cutting-edge optical fiber technology should be within reach for everyone. Our commitment to competitive pricing is rooted in the understanding that affordability and value are paramount. Choose ABS Cables Ltd for unbeatable value without compromise, and empower your connectivity with state-of-the-art optical fiber solutions that align with your budgetary goals",
    },
    {
      title: "Quick In Response",
      contents:
        "In the fast-paced world of telecommunications, we understand that time is of the essence. At ABS Cables Ltd, we take pride in our quick response capabilities, ensuring that our clients experience minimal downtime and swift resolutions to their connectivity needs. A quick response is not just a commitment – it's a cornerstone of our service philosophy. We recognize that in the realm of optical fiber technology, responsiveness is paramount. Choose [Company Name] for a partner that understands the value of time, and experience swift solutions and seamless connectivity that keep you connected in the blink of an eye",
    },
    {
      title: "Professional Approach",
      contents:
        "We pride ourselves on delivering not just cutting-edge technology but also a professional approach that sets the standard in the optical fiber industry. Our commitment to professionalism extends across every aspect of our operations, ensuring that our clients receive not only superior connectivity solutions but also a seamless and reliable partnership experience. The professional approach is not just a philosophy; it's a commitment to excellence in every interaction and project. Choose ABS Cables Ltd, for a partner that brings a level of professionalism that elevates your experience from consultation to implementation. With precision, transparency, and expertise, we deliver optical fiber solutions that not only meet but exceed your expectations, ensuring a seamless and professional journey toward superior connectivity",
    },
  ];
  const [active, setActive] = useState({
    title: qualityContents[0]?.title,
    details: qualityContents[0]?.contents,
  });
  return (
    <Container sx={{ mt: "60px" }}>
      <Divider
        textAlign="right"
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
      <Box sx={{ mt: "45px" }}>
        <Grid
          container
          sx={{
            border: "1px solid #FAF6E2",
          }}
        >
          <Grid item xs={4}>
            {qualityContents?.map(({ title, contents }, idx) => {
              return (
                <Box
                  onClick={() => setActive({ title: title, details: contents })}
                  key={idx}
                  sx={{
                    border: "1px solid #FAF6E2",
                    backgroundColor: active?.title === title && "tertiary.main",

                    "& :hover": {
                      backgroundColor: "tertiary.main",
                      color: "textBlack",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color:
                        active?.title === title ? "textBlack" : "textWhite",
                      py: "20px",
                      pl: "20px",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              background: "rgba( 3, 3, 3, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              pl: "20px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <Box>
              <Typography
                variant="body7"
                sx={{ color: "textWhite", p: "20px 20px 20px 0px" }}
              >
                {active?.details}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductQuality;
