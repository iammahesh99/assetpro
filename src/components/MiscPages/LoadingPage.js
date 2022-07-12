import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingPage() {
  return (
    <Box>
      <CircularProgress
        sx={{
          width: "128px",
          height: "128px",
          marginTop: "25% ",
          marginLeft: "45%",
        }}
      />
    </Box>
  );
}
