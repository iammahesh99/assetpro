import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { updateFilterData } from "../../store/AdvanceFilter/slice";

export const FilterAction = (filterData) => {
  const dispatch = useDispatch();
  const handleCheck = (checkId, filterId) => {
    const dispatchId = { checkedId: checkId, filterId: filterId };
    dispatch(updateFilterData(dispatchId));
  };
  const Body = filterData.map((item) => (
    <Accordion
      elevation={1}
      sx={{ margin: 0 }}
      key={item.id}
      TransitionProps={{ unmountOnExit: true }}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={item.label}
        id={item.label}
      >
        <Typography variant="navbarItem">{item.label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {item.checkvalue.map((checkdata) => (
            <FormControlLabel
              key={checkdata.id}
              control={
                <Checkbox
                  checked={checkdata.checked}
                  name={checkdata.name}
                  onChange={() => handleCheck(checkdata.id, item.id)}
                  color="outline"
                />
              }
              label={checkdata.name}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  ));
  return Body;
};
