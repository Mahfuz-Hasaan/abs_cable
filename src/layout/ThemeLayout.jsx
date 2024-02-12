import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import bgImg from "@assets/hero-bg.webp"

const ThemeLayout = ({ children }) => {
  const { breakpoints } = createTheme();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F0F32",
      },
      secondary: {
        main: "#F5D010",
      },
      tertiary: {
        main: "#FAF6E2",
      },
      quaternary: {
        main: "#FFFBE3",
      },
      bgOne: {
        main: "rgba(255, 251, 227, 0.30)",
      },
      bgTwo: {
        main: "#fff",
      },
      bgThree: {
        main: "#28241E",
      },
      bgFour: {
        main: "#595A5A",
      },
      bgGradient: {
        main: "linear-gradient(109deg, #F5D010 30.39%, rgba(32, 29, 48, 0.90) 25.97%, #F5D010 80.39%)",
      },

      mainGradient: "linear-gradient(to right, tomato, cyan)",
      textBlack: "#1D1D1B",
      textGrey: "#595A5A",
      textAccent: "#F5D010",
      textWhite: "#FAF6E2",
      borderColor: "#A19C9C",
    },
    typography: {
      fontFamily: ["Manrope Variable", "Josefin Sans Variable"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "& .MuiGrid-root .MuiGrid-item": {
            paddingTop: "0 !important",
          },
          body: {
            //Set core body defaults
            backgroundColor: "#0F0F32",
            padding: 0,
            minHeight: "100vh",
            textRendering: "optimizeSpeed",
            //for non mui componet
            "*": {
              fontFamily: ["Josefin Sans Variable", "sans-serif"].join(","),
              fontWeight: 400,
            },
            // Box sizing rules
            "*,*::before,*::after": {
              boxSizing: "border-box",
            },
            // Set core root defaults
            "& html:focus-within": { scrollBehavior: "smooth" },

            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              background: "#FAF6E2",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              background:
                "linear-gradient(109deg, #F5D010 30.39%, rgba(32, 29, 48, 0.90) 25.97%, #F5D010 80.39%)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover":
              {
                background: "#FAF6E2",
              },
            "&::-selection, & *::-selection": {
              backgroundColor: "gray",
            },

            // Remove all animations, transitions and smooth scroll for people that prefer not to see them
            ["@media (prefers-reduced-motion: reduce)"]: {
              "& html:focus-within": {
                scrollBehavior: "auto",
              },
              "*,*::before,*::after": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontSize: "128px",
            fontWeight: 400,
            lineHeight: "128px",
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "86px",
          },
          h2: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontSize: "64px",
            lineHeight: "64px",
            fontWeight: 600,
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "86px",
          },
          h3: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "64px",
            lineHeight: "64px",
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "86px",
          },
          h4: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontSize: "56px",
            lineHeight: "90px",
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "86px",
          },
          h5: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontSize: "48px",
            lineHeight: "48px",
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "86px",
          },
          h6: {
            fontFamily: "Josefin Sans Variable",
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "32px",
            color: "#595A5A",
            [breakpoints.down("sm")]: {
              fontSize: "30px",
              lineHeight: "50px",
            },
            lineHeight: "56px",
          },
          body1: {
            fontFamily: "Manrope Variable",
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#1D1D1B",
            [breakpoints.down("sm")]: {
              fontSize: "18px",
            },
            lineHeight: "28px",
          },
          body2: {
            fontFamily: "Manrope Variable",
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "#1D1D1B",
            [breakpoints.down("sm")]: {
              fontSize: "18px",
            },
            lineHeight: "40px",
          },
        },

        variants: [
          {
            props: { variant: "h7" },
            style: {
              fontFamily: "Josefin Sans Variable",
              display: "block",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "32px",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
              lineHeight: "35px",
            },
          },
          {
            props: { variant: "body3" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "32px",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
              lineHeight: "35px",
            },
          },
          {
            props: { variant: "body4" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "32px",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
              lineHeight: "35px",
            },
          },
          {
            props: { variant: "body5" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontStyle: "normal",
              fontSize: "21px",
              lineHeight: "34px",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
              lineHeight: "35px",
            },
          },
          {
            props: { variant: "body6" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "38px",
              fontWeight: 300,
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
              lineHeight: "35px",
            },
          },
          {
            props: { variant: "body7" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "48px",
              fontWeight: 500,
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "22px",
              },
            },
          },
          {
            props: { variant: "caption1" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontSize: "50px",
              lineHeight: "78px",
              fontStyle: "normal",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              lineHeight: "78px",
            },
          },
          {
            props: { variant: "caption2" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontSize: "34px",
              lineHeight: "47px",
              fontStyle: "normal",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              lineHeight: "22px",
            },
          },
          {
            props: { variant: "caption3" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontSize: "24px",
              lineHeight: "33px",
              fontStyle: "normal",
              color: "#595A5A",
              [breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              lineHeight: "40px",
            },
          },
          {
            props: { variant: "tabTitle1" },
            style: {
              fontFamily: "Manrope Variable",
              display: "block",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "33px",
              fontStyle: "normal",
              [breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              lineHeight: "20px",
            },
          },
        ],
      },
      //container
      MuiContainer: {
        styleOverrides: {
          root: {
            "&.MuiContainer-root": {
              maxWidth: "1320px",
              // padding: "0px !important",
              width: "100%",
              [breakpoints.down("sm")]: {
                paddingLeft: "15px",
                paddingRight: "15px",
              },
            },
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          disableInjectingGlobalStyles: true,
        },
      },
      //naive select field
      MuiNativeSelect: {
        styleOverrides: {
          select: {
            "&:focus": {
              backgroundColor: "unset",
            },
            fontSize: "18px",
            fontWeight: "400",
          },
        },
      },
      //menu field
      MuiMenu: {
        styleOverrides: {
          root: {
            "& .MuiMenu-list": {
              maxHeight: "300px",
            },
            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "3px",
            },
          },
        },
      },
      //InputLabel
      MuiInputLabel: {
        styleOverrides: {
          root: {
            padding: "0px 10px",
            fontSize: "12px",
            color: "#595A5A",
            lineHeight: "21px",
            "& .MuiInputLabel-asterisk": {
              color: "#E56456 !important",
            },
          },
        },
      },
      //all type of text field
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "0px !important",
            "& .MuiFormHelperText-root": {
              color: "#fff !important",
              fontSize: "12px",
              fontWeight: 300,
              letterSpacing: "0.01em",
              textAlign: "left",
              marginTop: "2px !important",
              marginLeft: "0px !important",
              paddingLeft: "5px",
              borderRadius: "0px 0px 5px 5px",
              backgroundColor: "#E56456",
              // width: "100%",

              // do not delete any commented code.
              // "@media only screen and (min-width: 640px)": {
              //   width: "100%",
              // },
              // "@media only screen and (min-width: 768px)": {
              //   width: "100%",
              // },
              // "@media only screen and (min-width: 1024px)": {
              //   width: "103.5%",
              // },
              // "@media only screen and (min-width: 1280px)": {
              //   width: "103.5%",
              // },
              // "@media only screen and (min-width: 1440px)": {
              //   width: "101.9%",
              // },
            },
            //important for border outline
            // "& label.Mui-focused": {
            //   color: "#595A5A",
            // },
            // "& .MuiInput-underline:after": {
            //   borderBottomColor: "#A19C9C",
            // },
            // "& .MuiOutlinedInput-root": {
            //   "& fieldset": {
            //     borderColor: "#A19C9C",
            //   },
            //   "&:hover fieldset": {
            //     borderColor: "#A19C9C",
            //   },
            //   "&.Mui-focused fieldset": {
            //     borderColor: "#A19C9C",
            //   },
            // },
            // "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
            //   {
            //     borderColor: "#E56456",
            //   },
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "& .MuiInputBase-input": {
              padding: "0px 10px",
            },
            // "& .MuiOutlinedInput-root": {
            //   paddingLeft: "10px",
            // },
            // "& .MuiFormControl-root-MuiTextField-root": {
            //   margin: "0px !important",
            // },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: "unset",
          },
        },
        variants: [
          {
            props: { variant: "btnYellow" },

            style: {
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "capitalize",
              borderRadius: "100px",
              color: "#000",
              backgroundColor: "#F5D010",
              "&:hover": {
                backgroundColor: "#F5D010",
              },
              "& .icon": {
                height: "2rem",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },

              "& .icon span": {
                background: "black",
                borderRadius: "100%",
                padding: "0rem",
                width: "0rem",
                height: "0rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-180deg)",
                transition: "all 0.5s ease",
              },

              "&:hover .icon span": {
                transform: "rotate(0deg)",
                borderRadius: "100%",
                padding: "0.5rem",
                width: "1.8rem",
                height: "1.8rem",
              },

              "&:hover": {
                backgroundColor: "#F5D012",
              },
            },
          },
          {
            props: { variant: "btnWhite" },
            style: {
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "capitalize",
              borderRadius: "100px",
              color: "#000",
              backgroundColor: "#FAF6E2",
              "&:hover": {
                backgroundColor: "#FAF6E2",
              },
              "& .icon": {
                height: "2rem",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },

              "& .icon span": {
                background: "black",
                borderRadius: "100%",
                padding: "0rem",
                width: "0rem",
                height: "0rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-180deg)",
                transition: "all 0.5s ease",
              },

              "&:hover .icon span": {
                transform: "rotate(0deg)",
                borderRadius: "100%",
                padding: "0.5rem",
                width: "1.8rem",
                height: "1.8rem",
              },

              "&:hover": {
                backgroundColor: "#FAF6E2",
              },
            },
          },
        ],
      },

      MuiFormLabel: {
        variants: [
          {
            props: { variant: "customFormLabel" },
            style: {
              fontFamily: "Avenir",
              fontSize: "14px",
              fontWeight: 750,
              textTransform: "capitalize",
              color: "#5E5873",
            },
          },
        ],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
