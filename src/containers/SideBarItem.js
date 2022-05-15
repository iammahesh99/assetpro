import { Box, styled, Divider, Typography } from "@mui/material";
import { useState } from "react";
import CustomPopper from "../components/CustomPopper";
import { useNavigate, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ListItemWrap = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("laptop")]: {
    paddingLeft: "4px",
    paddingRight: "5px",
  },
  "&:hover": {
    borderBottom: "4px solid",
    borderColor: theme.palette.outline.main,
    cursor: "pointer",
    backgroundColor: "#FFFFFF",
    color: theme.palette.outline.main,
    fontWeight: "bold",
  },
}));
const ListWrap = styled(List)(({ theme, style }) => ({
  "&& .Mui-selected": {
    borderBottom: "4px solid",
    borderColor: theme.palette.outline.main,
    color: theme.palette.outline.main,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

const PopperItem = (Route) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ListWrap
      sx={{
        marginLeft: "8px",
        backgroundColor: "white",
      }}
    >
      {Route.map((data) => (
        <Box key={data.id}>
          <ListItemWrap
            selected={data.path === location.pathname}
            onClick={(e) => {
              navigate(data.path);
            }}
          >
            <Typography variant="h7">{data.name}</Typography>
          </ListItemWrap>
          <Divider variant="inset" />
        </Box>
      ))}
    </ListWrap>
  );
};

const SideBarItem = ({ Route }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popperData, setPopperData] = useState([]);
  const open = Boolean(anchorEl);
  const location = useLocation();

  return (
    <ListWrap
      sx={{
        display: "flex",
      }}
    >
      {Route.map((data) => (
        <Box key={data.id} sx={{ m: 0 }}>
          <ListItemWrap
            selected={data.path === location.pathname}
            onClick={(e) => {
              if (data.otherpath.length === 0) {
                navigate(data.path);
                setAnchorEl(null);
              } else {
                setAnchorEl(anchorEl ? null : e.currentTarget);
              }
              setPopperData(data.otherpath);
            }}
          >
            <Typography variant="navbarItem">{data.name}</Typography>
            {data.otherpath.length === 0 ? null : (
              <ArrowDropDownIcon sx={{ height: ".8rem" }} />
            )}
          </ListItemWrap>

          <CustomPopper
            open={open}
            placement="bottom"
            content={PopperItem(popperData)}
            anchorEl={anchorEl}
          />
        </Box>
      ))}
    </ListWrap>
  );
};
export default SideBarItem;
