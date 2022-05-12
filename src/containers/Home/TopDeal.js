import React from "react";
import { List, ListItem, Divider, Typography, Box } from "@mui/material";
const topDealsData = [
  {
    id: 1,
    content: "This will contain first list data ",
    img: "home.jpeg",
  },
  { id: 2, content: "This will contain second list data ", img: "home.jpeg" },
  { id: 3, content: "This will contain third list data ", img: "home.jpeg" },
  { id: 4, content: "This will contain fourth list data ", img: "home.jpeg" },
];

const TopDeals = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {topDealsData.map((data) => (
        <React.Fragment key={data.id}>
          <ListItem alignItems="center">
            <Box
              component="img"
              sx={{
                width: { laptop: "20%", tablet: "30%" },
                objectFit: "contain",
              }}
              src={data.img}
            />

            <Typography variant="span" sx={{ marginLeft: "20px" }}>
              {data.content}
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
export default TopDeals;
