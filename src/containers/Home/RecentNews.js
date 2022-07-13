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
    heading:
      "South Korean Seminar to Outline Nation’s Growing Role and Risks in Financial-Crime Fight",
    dateTime: "June 06, 2022 19:00 ET",
    source: "ReportLinker",
    content:
      "MIAMI, June  07, 2022  (GLOBE NEWSWIRE) -- South Korea’s fight against money laundering will soon be bolstered by new recruits from the public and private sectors after lawmakers, academics, and other stakeholders gather at the National Assembly on June 8",
    img_url: "/reportlinker.png",
  },
  {
    id: 2,
    heading:
      "South Korean Seminar to Outline Nation’s Growing Role and Risks in Financial-Crime Fight",
    dateTime: "June 06, 2022 19:00 ET",
    source: "ReportLinker",
    content:
      "MIAMI, June  07, 2022  (GLOBE NEWSWIRE) -- South Korea’s fight against money laundering will soon be bolstered by new recruits from the public and private sectors after lawmakers, academics, and other stakeholders gather at the National Assembly on June 8",
    img_url: "/rm.png",
  },
  {
    id: 3,
    heading:
      "South Korean Seminar to Outline Nation’s Growing Role and Risks in Financial-Crime Fight",
    dateTime: "June 06, 2022 19:00 ET",
    source: "ReportLinker",
    content:
      "MIAMI, June  07, 2022  (GLOBE NEWSWIRE) -- South Korea’s fight against money laundering will soon be bolstered by new recruits from the public and private sectors after lawmakers, academics, and other stakeholders gather at the National Assembly on June 8",
    img_url: "/reportlinker.png",
  },
];

export default function RecentNews() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {recentnews.map((item) => (
        <Box key={item.id}>
          <ListItem>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "2% 3% 2% 2%",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="Report Linker"
                src={item.img_url}
              />
            </Box>
            <ListItemText
              primary={
                <>
                  <Typography variant="h6">{item.heading}</Typography>
                  <Typography
                    variant="span"
                    color="text.secondary"
                    sx={{ color: "#C0C0C0" }}
                  >
                    {item.dateTime} | {item.source}
                  </Typography>
                </>
              }
              secondary={
                <>
                  <br />
                  <Typography variant="paragraph" color="text.secondary">
                    {item.content}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ marginLeft: "23%" }} />
        </Box>
      ))}
    </List>
  );
}
