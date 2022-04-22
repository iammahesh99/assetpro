import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    iconColor: {
      main: "black",
    },
  },
  components: {
    background: {
      main: "white",
    },
  },
});
export default theme;
