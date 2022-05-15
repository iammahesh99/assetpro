import { Box } from "@mui/system";
import AdvanceFilterIcon from "../../components/AdvanceFilterIcon";
import FilterContent from "./FilterContent";
import { useState } from "react";

const FilterPresentationPage = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      {open ? (
        <FilterContent handleCloseFilter={handleClose} />
      ) : (
        <AdvanceFilterIcon handleFilterClick={handleClick} />
      )}
    </Box>
  );
};
export default FilterPresentationPage;
