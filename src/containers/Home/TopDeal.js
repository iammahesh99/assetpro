import React from "react";
import { List, ListItem, Divider, Typography } from "@mui/material";
const topDealsData = [
  { id: 1, content: "This will contain first list data " },
  { id: 2, content: "This will contain second list data " },
  { id: 3, content: "This will contain third list data " },
  { id: 4, content: "This will contain fourth list data " },
];

const TopDeals = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {topDealsData.map((data) => (
        <React.Fragment key={data.id}>
          <ListItem alignItems="flex-start">
            <Typography variant="body1">{data.content}</Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
export default TopDeals;
