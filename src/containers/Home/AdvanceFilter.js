import { Fab, Box } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
const AdvanceFilter = () => {
  return (
    <Box>
      <Fab
        size="large"
        color="outline"
        aria-label="Advance Filter"
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        <FilterAltOffIcon />
      </Fab>
    </Box>
  );
};
export default AdvanceFilter;
