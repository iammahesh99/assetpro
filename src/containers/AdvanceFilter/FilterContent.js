import { Box, Paper, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton";
import {
  resetFilter,
  getCurrentStateData,
  setPopupState,
} from "../../store/AdvanceFilter/slice";
import { FilterAction } from "./FilterAction";
import { checkedFilterData } from "../../util/handleFilter";
import { filterChart } from "../../store/Chart/Bullseya/slice";

const FilterWrapper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  top: "10%",
  right: 0,
  minWidth: "300px",
  zIndex: 1,
  minHeight: "50vh",
}));

const CloseWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.outline.main,
}));

const ActionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const FilterContent = ({ handleCloseFilter }) => {
  const { filterData } = useSelector((state) => state.filterData);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetFilter());
  };
  const handleApply = () => {
    dispatch(getCurrentStateData(filterData));
    dispatch(setPopupState(false));
    const currentFilterdata = checkedFilterData("Select Moa", filterData);
    dispatch(filterChart(currentFilterdata));
  };

  return (
    <FilterWrapper elevation={3}>
      <CloseWrapper p={2}>
        <Typography variant="h7" color="secondary">
          Filters
        </Typography>
        <CloseIcon
          color="secondary"
          fontSize="medium"
          onClick={handleCloseFilter}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </CloseWrapper>
      {FilterAction(filterData)}
      <ActionWrapper>
        <CustomButton
          label="Reset"
          color="outline"
          size="medium"
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={handleReset}
        />
        <CustomButton
          label="Apply"
          color="outline"
          size="medium"
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={handleApply}
        />
      </ActionWrapper>
    </FilterWrapper>
  );
};
export default FilterContent;
