import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, styled, Box } from "@mui/material";

export default function NewsCard({ content, header }) {
  return (
    <Box sx={{ marginBottom: "5%" }}>
      <Header>
        <Typography variant="h5" color="secondary">
          {header}
        </Typography>
      </Header>
      <Card variant="outlined">
        <CardContent>{content}</CardContent>
        <Bottom />
      </Card>
    </Box>
  );
}

const Header = styled(Box)(({ theme }) => ({
  background: theme.palette.outline.main,
  height: "50px",
  display: "flex",
  padding: "0% 0% 0% 6%",
  alignItems: "center",
  marginBottom: "2%",
}));

const Bottom = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.outline.main,
  height: "10px",
}));
