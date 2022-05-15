import { Fab, Box, styled } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

const FabWrapper = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  backgroundColor: theme.palette.outline.main,
}));
const AdvanceFilterIcon = ({ handleFilterClick }) => {
  return (
    <Box>
      <FabWrapper
        size="large"
        aria-label="Advance Filter"
        onClick={handleFilterClick}
      >
        <FilterAltOffIcon />
      </FabWrapper>
    </Box>
  );
};
export default AdvanceFilterIcon;
