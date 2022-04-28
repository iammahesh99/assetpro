import { Box, styled } from "@mui/material";
export const CommonWrapper = styled(Box)(({ theme, stylewrapper }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginTop: "80px",
  minHeight: "90vh",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.1),0px 1px 2px rgba(0, 0, 0, 0.1)",
  ...stylewrapper,
}));
