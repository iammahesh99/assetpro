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
  },
});
export default theme;
