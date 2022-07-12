import React from "react";
import { List, ListItem, Divider, Typography, Box } from "@mui/material";
const topDealsData = [
  {
    id: 1,
    content: "This will contain first list data ",
  },
  { id: 2, content: "This will contain second list data " },
  { id: 3, content: "This will contain third list data " },
  { id: 4, content: "This will contain fourth list data " },
];

const TopDeals = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {topDealsData.map((data) => (
        <Box key={data.id}>
          <ListItem alignItems="center">
            <Typography variant="paragraph">{data.content}</Typography>
          </ListItem>
          <Typography variant="span" color="text.secondary">
            17 hours ago
          </Typography>
          <Divider
            variant="inset"
            component="li"
            sx={{ marginTop: "1%", marginLeft: "0" }}
          />
        </Box>
      ))}
    </List>
  );
};
export default TopDeals;
