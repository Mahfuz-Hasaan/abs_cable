import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { motion } from "framer-motion";

const BlobContent = () => {
  const blob_contents = [
    {
      id: "1",
      title: "Innovative Approach",
      svg1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270"
          height="257"
          viewBox="0 0 270 257"
          fill="none"
        >
          <path
            d="M170.942 37.7135C117.326 43.7892 90.1557 1.86591 53.9976 0.683304C18.5344 -0.469733 -1.96901 30.411 10.6257 80.2133C24.9352 136.801 -1.93944 165.553 0.558807 211.645C1.60837 231.025 20.9439 258.579 44.9064 255.933C76.3932 252.474 89.1357 216.257 116.956 191.304C141.924 168.908 185.4 153.387 211.579 137.052C237.227 121.043 267.516 109.394 269.911 74.9655C271.493 52.1708 251.315 28.6075 170.942 37.7135Z"
            fill="url(#paint0_linear_238_1961)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1961"
              x1="135.195"
              y1="0.6521"
              x2="135.195"
              y2="256.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00BAE2" stopOpacity="0.15" />
              <stop offset="0.895833" stopColor="#ADF0FF" stopOpacity="0.91" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="275"
          height="180"
          viewBox="0 0 275 180"
          fill="none"
        >
          <path
            d="M272.501 124.905C255.827 152.253 223.098 141.077 195.44 138.638C141.203 133.849 104.439 205.899 47.4964 168.661C-15.5511 127.433 -15.8911 52.5151 46.8016 23.7335C222.241 -56.8165 287.639 100.07 272.501 124.905Z"
            fill="url(#paint0_linear_238_1962)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1962"
              x1="137.303"
              y1="0.939453"
              x2="137.303"
              y2="179.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ADF0FF" />
              <stop offset="1" stopColor="#00BAE2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      contents:
        "Innovating within a cables company can involve various aspects of the business, from product design to manufacturing processes, distribution, and even customer engagement. Explore novel materials that could enhance the durability, conductivity, or flexibility of cables,reducing costs or improving performanceInnovating within a cables company can involve various aspects of the business, from product design to manufacturing processes, distribution, and even customer engagement. ",
    },
    {
      id: "2",
      title: "Cutting Edge",
      svg1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="247"
          height="218"
          viewBox="0 0 247 218"
          fill="none"
        >
          <path
            d="M14.312 105.9C-35.5896 182.351 59.7541 217.536 120.061 217.536C179.357 217.536 246.383 195.164 246.383 126.414C246.383 -50.553 99.9786 -25.3123 14.312 105.9Z"
            fill="url(#paint0_linear_238_1973)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1973"
              x1="143.001"
              y1="7.0149"
              x2="86.501"
              y2="207.015"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.159983" stopColor="#966B94" />
              <stop offset="1" stopColor="#FEC5FB" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="312"
          height="196"
          viewBox="0 0 312 196"
          fill="none"
        >
          <path
            d="M101.038 133.233C88.3432 126.767 72.3634 126.395 58.1525 124.136C44.9227 122.025 20.8118 112.794 11.1793 102.789C-5.48427 85.5016 -4.47345 47.7447 20.6929 35.6892C49.5606 21.85 85.831 34.5446 117.122 38.6622C165.403 45.0095 175.779 7.71341 222.737 1.30662C240.694 -1.14609 266.321 4.23501 275.121 22.5189C286.285 45.7379 271.479 72.4056 288.217 94.4205C294.475 102.656 334.997 137.306 293.643 150.952C278.837 155.842 263.645 159.009 248.513 162.621C233.945 166.099 219.794 170.261 206.713 177.664C189.261 187.534 170.071 202.266 149.973 192.321C124.123 179.507 124.614 145.244 101.038 133.233Z"
            fill="url(#paint0_linear_238_1972)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1972"
              x1="180.903"
              y1="6.52623"
              x2="143.581"
              y2="193.046"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEC5FB" stopOpacity="0.1" />
              <stop offset="0.96875" stopColor="#966B94" />
            </linearGradient>
          </defs>
        </svg>
      ),
      contents:
        "Develop cables embedded with sensors or smart technology to detect faults, monitor usage,or adapt to different environments. Implement advanced automation in manufacturing processes to increase efficiency, reduce errors, and lower production costs.",
    },
    {
      id: "3",
      title: "Latest Equipment's",
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="312"
          height="233"
          viewBox="0 0 312 233"
          fill="none"
        >
          <path
            d="M42.9018 180.234C-17.3917 131.835 -10.1551 78.8315 39.8567 88.8983C78.4044 96.6544 86.2321 74.5504 108.157 40.3196C130.637 5.22896 181.258 31.023 214.253 10.8893C270.068 -23.1624 271.179 32.0619 271.716 69.0154C272.253 105.7 320.152 125.852 310.783 173.033C303.17 211.366 243.97 177.78 186.399 210.524C108.3 254.911 97.6603 224.174 42.9018 180.234Z"
            fill="url(#paint0_linear_238_1984)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1984"
              x1="304.505"
              y1="113.148"
              x2="3.86622"
              y2="151.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.203125" stopColor="#F9A855" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FF982F" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="253"
          height="307"
          viewBox="0 0 253 307"
          fill="none"
        >
          <path
            d="M70.8921 1.35046C105.66 -10.848 148.346 63.3277 168.032 73.09C206.669 92.2564 272.999 86.0945 246.99 130.285C234.953 150.723 209.929 178.416 200.507 194.447C181.466 226.851 218.76 284.977 185.102 301.94C151.588 318.832 123.071 280.624 90.2555 268.032C68.5097 259.685 45.2234 263.804 23.0478 259.47C7.78632 256.478 -5.5585 239.336 3.32611 222.767C58.2996 120.2 11.9241 22.0394 70.8921 1.35046Z"
            fill="url(#paint0_linear_238_1983)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1983"
              x1="76.9999"
              y1="-0.000264838"
              x2="187.657"
              y2="300.604"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F9A855" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FF982F" />
            </linearGradient>
          </defs>
        </svg>
      ),
      contents:
        "Focus on sustainable materials and Eco-friendly manufacturing processes to reduce impact on environment. Provide resources and educational content on cable usage, installation guides, and troubleshooting tips to enhance customer experience. Offer additional services such as installation support, maintenance packages, or warranties to add value for customers.",
    },
    {
      id: "4",
      title: "Affordable Teamate",
      svg1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="253"
          height="308"
          viewBox="0 0 253 308"
          fill="none"
        >
          <path
            d="M182.458 306.353C147.69 318.589 105.004 244.184 85.3185 234.391C46.6812 215.166 -19.6488 221.347 6.36018 177.02C18.3974 156.519 43.4212 128.741 52.8431 112.659C71.8841 80.1557 34.5903 21.8501 68.2479 4.83461C101.762 -12.109 130.279 26.2163 163.095 38.8477C184.84 47.2207 208.127 43.0881 230.302 47.4363C245.564 50.4369 258.909 67.6321 250.024 84.2524C195.051 187.136 241.426 285.6 182.458 306.353Z"
            fill="url(#paint0_linear_238_1994)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1994"
              x1="126.675"
              y1="0.583008"
              x2="126.675"
              y2="307.707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#958CFF" />
              <stop offset="0.984375" stopColor="#DCD9FC" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="312"
          height="233"
          viewBox="0 0 312 233"
          fill="none"
        >
          <path
            d="M269.096 180.739C329.389 132.19 322.153 79.0229 272.141 89.1208C233.593 96.9009 225.765 74.7286 203.841 40.3921C181.36 5.19312 130.74 31.0668 97.7448 10.8709C41.9294 -23.2859 40.8188 32.1089 40.2814 69.1765C39.7441 105.975 -8.15398 126.188 1.21426 173.516C8.82708 211.967 68.0279 178.277 125.599 211.122C203.697 255.647 214.337 224.814 269.096 180.739Z"
            fill="url(#paint0_linear_238_1995)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_238_1995"
              x1="155.999"
              y1="0.181641"
              x2="155.999"
              y2="232.848"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCD9FC" />
              <stop offset="1" stopColor="#958CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      contents:
        "Collaborate with other industries (e.g., automotive, telecommunications, renewable energy) to innovate and adapt cable solutions for different applications. Create a dedicated space for rapid prototyping and testing of new cable designs or technologies.",
    },
  ];

  return (
    <Box sx={{ pt: "120px" }}>
      <Grid sx={{ rowGap: "50px" }} container>
        {blob_contents?.map(({ svg1, svg2, contents, title }, idx) => {
          return (
            <Grid
              key={idx}
              container
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
                lineHeight: "20px",
                backgroundColor: "primary.main",
                py: "80px",
              }}
            >
              <Grid item xs={3}>
                <Container>
                  <Box sx={{ position: "relative", display: "flex" }}>
                    <Box
                      animate={{
                        rotate: [360, 0],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      component={motion.div}
                    >
                      {svg1}
                    </Box>
                    <Box
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      component={motion.div}
                      sx={{
                        position: "absolute",
                        left: idx === 2 ? "-10%" : idx === 1 ? "-10%" : "0%",
                      }}
                    >
                      {svg2}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        top: idx === 1 ? "50%" : idx === 0 ? "40%" : "45%",
                        left: idx === 1 ? "30%" : idx === 3 ? "41%" : "30%",
                        color: "textWhite",
                        maxWidth: "120px",
                        textAlign: "center",
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>
                </Container>
              </Grid>
              <Grid item xs={7}>
                <Container>
                  <Typography variant="body5" sx={{ color: "textWhite" }}>
                    {contents}
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BlobContent;
