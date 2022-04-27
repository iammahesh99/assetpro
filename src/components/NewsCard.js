import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, styled, Box } from "@mui/material";

export default function NewsCard({ content, header }) {
  return (
    <Card sx={{ marginBottom: "5%" }}>
      <Header>
        <Typography variant="subtitle1" color="secondary">
          {header}
        </Typography>
      </Header>
      <CardContent>{content}</CardContent>
      <Bottom></Bottom>
    </Card>
  );
}

const Header = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.backgoundGrad.mainGradient,
  height: "50px",
  display: "flex",
  padding: "0% 0% 0% 6%",
  alignItems: "center",
}));

const Bottom = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.backgoundGrad.mainGradient,
  height: "10px",
}));
