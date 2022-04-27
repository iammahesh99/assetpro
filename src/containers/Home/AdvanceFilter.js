import { Box, InputLabel, Select, MenuItem } from "@mui/material";
const AdvanceFilter = () => {
  return (
    <>
      <Select labelId="label" id="select" value="10">
        <MenuItem value="10">AdvanceFilter</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </Select>
    </>
  );
};
export default AdvanceFilter;
