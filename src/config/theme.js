import { createTheme } from "@mui/material";
let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    outline: {
      main: "#68BBE3",
    },
    backgoundGrad: {
      mainGradient:
        "linear-gradient(90deg, rgba(246,170,159,1) 0%, rgba(245,165,151,1) 0%, rgba(182,109,238,1) 0%, rgba(236,129,99,1) 92%)",
    },
  },

  //typgraphy

  typography: {
    span: {
      fontSize: ".87rem",
    },
    body1: {
      fontSize: 15,
    },
    navbarItem: {
      fontSize: "1rem",
    },
  },

  //breakpoint

  breakpoints: {
    values: {
      xs: 0,
      tablet: 768,
      laptop: 1024,
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
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
theme = createTheme(theme, {
  components: {
    MuiTypography: {
      styleOverrides: {
        navbarItem: {
          [theme.breakpoints.down("laptop")]: {
            fontSize: ".80rem",
          },
        },
      },
    },
  },
});
export default theme;
