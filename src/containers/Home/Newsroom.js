import { Box, List, ListItem, Divider, Typography } from "@mui/material";
import NewsCard from "../../components/NewsCard";
import React from "react";

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
            <Typography>{data.content}</Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
const Newsroom = () => {
  return (
    <Box flex={2}>
      <NewsCard content={TopDeals()} header="TOP DEALS" />
      <NewsCard header="TOP DEALS" />
    </Box>
  );
};
export default Newsroom;
