import { Box } from "@mui/material";
import CustomCheckboxDropdown from "../../components/CustomCheckboxDropdown";
import CustomButton from "../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { checkedData, dispatchAllState } from "./filterdData";

const UserFilter = () => {
  const { therepaticArea, indication } = useSelector(
    (state) => state.onboardingdata
  );
  const dispatch = useDispatch();
  const [checkedTherapyArea, setcheckedTherapyArea] = useState([]);
  //const [checkedMoa, setCheckedMoa] = useState([]);
  const [checkedIndication, setCheckedIndication] = useState([]);
  //const [checkedPhases, setCheckedPhases] = useState([]);
  const handleTherapyArea = (e) => {
    const {
      target: { value },
    } = e;
    setcheckedTherapyArea(checkedData(value, checkedTherapyArea));
    dispatchAllState(dispatch, value);
  };
  // const handleMoa = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   setCheckedMoa(checkedData(value, checkedMoa));
  // };
  const handleIndication = (e) => {
    const {
      target: { value },
    } = e;
    setCheckedIndication(checkedData(value, checkedIndication));
  };
  // const handlePhases = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   setCheckedPhases(checkedData(value, checkedPhases));
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "55%",
      }}
    >
      <CustomCheckboxDropdown
        data={therepaticArea}
        handleChange={handleTherapyArea}
        checkedValue={checkedTherapyArea}
        label="Select Therapy Area"
      />

      <CustomCheckboxDropdown
        data={indication}
        handleChange={handleIndication}
        checkedValue={checkedIndication}
        label="Select Indication"
      />

      <CustomButton
        variant="outlined"
        size="small"
        color="secondary"
        label="Contiue"
        sx={{ padding: "0 15px 0 15px" }}
      />
      <CustomButton
        variant="outlined"
        size="small"
        color="secondary"
        label="Reset"
        sx={{ padding: "0 15px 0 15px" }}
      />
    </Box>
  );
};
export default UserFilter;
