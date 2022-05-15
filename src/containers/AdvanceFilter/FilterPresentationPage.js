import { Box } from "@mui/system";
import AdvanceFilterIcon from "../../components/AdvanceFilterIcon";
import FilterContent from "./FilterContent";
import { useDispatch, useSelector } from "react-redux";
import { updateOnClose, setPopupState } from "../../store/AdvanceFilter/slice";

const FilterPresentationPage = () => {
  const open = useSelector((state) => state.filterData.handleFilterPopup);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setPopupState(true));
  };
  const handleClose = () => {
    dispatch(setPopupState(false));
    dispatch(updateOnClose());
  };
  return (
    <Box>
      {open ? (
        <FilterContent handleCloseFilter={handleClose} />
      ) : (
        <AdvanceFilterIcon handleFilterClick={handleOpen} />
      )}
    </Box>
  );
};
export default FilterPresentationPage;
