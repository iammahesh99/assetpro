import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    backgoundGrad: {
      mainGradient:
        "linear-gradient(90deg, rgba(246,170,159,1) 0%, rgba(245,165,151,1) 0%, rgba(182,109,238,1) 0%, rgba(236,129,99,1) 92%)",
    },
  },

  //typgraphy

  typography: {
    span: {
      fontSize: 17,
    },
    h5: {},
    h6: {},
    body1: {
      fontSize: 15,
    },
  },

  //breakpoint

  breakpoints: {
    values: {
      xs: 0,
      tablet: 600,
      laptop: 960,
      desktop: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "0px 5px 0px 5px",
        },
      },
    },
  },
});
export default theme;
