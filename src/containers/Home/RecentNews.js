import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const recentnews = [
  {
    id: 1,
    heading: "Heading",
    dateTime: "25 Nov-2021",
    source: "Report Linker",
    content: "Here we will show all the content",
    img_url: "/reportlinker.png",
  },
];

export default function RecentNews() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "20%",
            margin: "2% 3% 2% 2%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="Report Linker"
            src="/reportlinker.png"
          />
        </Box>
        <ListItemText
          primary={<Typography variant="h6">"Brunch this weekend?"</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                variant="paragraph"
                color="text.secondary"
              >
                {" — I'll be in your neighborhood doing errands this…"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" sx={{ marginLeft: "23%" }} />
    </List>
  );
}
