import { Select, MenuItem, Typography } from "@mui/material";
const AdvanceFilter = () => {
  return (
    <>
      <Select labelId="label" id="select" value="10">
        <MenuItem value="10" dense={true} sx={{ padding: "0px" }}>
          <Typography variant="span">Advance Filter</Typography>
        </MenuItem>
        <MenuItem value="20" dense>
          <Typography variant="span">Advance Filter</Typography>
        </MenuItem>
      </Select>
    </>
  );
};
export default AdvanceFilter;
