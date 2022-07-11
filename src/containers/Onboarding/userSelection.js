import { Box, styled, Typography } from "@mui/material";
import UserFilter from "./userFilter";
const UseSelectionHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "3%",
  gap: "20px",
}));

const UseSelectionFilter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const UseSelectionwrapper = styled(Box)(({ theme }) => ({
  padding: "4%",
  backgroundColor: theme.palette.outline.main,
  borderRadius: "10px",
}));

const LeftVerticalbox = styled(Box)(({ theme }) => ({
  width: "13px",
  borderRadius: "35% 0% 0% 35%",
  backgroundColor: theme.palette.secondary.main,
}));
const RightVerticalbox = styled(Box)(({ theme }) => ({
  width: "13px",
  borderRadius: "0% 35% 35% 0%",
  backgroundColor: theme.palette.secondary.main,
}));

const Verticalbox = styled(Box)(({ theme }) => ({
  width: "8px",
  backgroundColor: theme.palette.secondary.main,
}));

const UserSelection = () => {
  return (
    <UseSelectionwrapper>
      <UseSelectionHeading>
        <LeftVerticalbox />
        <Verticalbox />
        <Box
          sx={{
            backgroundColor: "white",
            padding: ".5% 4% .5% 4%",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="outline.main">
            Choose Your Interest Area
          </Typography>
        </Box>
        <Verticalbox />
        <RightVerticalbox />
      </UseSelectionHeading>
      <UseSelectionFilter>
        <UserFilter />
      </UseSelectionFilter>
    </UseSelectionwrapper>
  );
};
export default UserSelection;
