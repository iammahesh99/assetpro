import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
const CustomDropdown = ({ label, handleChange, data, value }) => {
  return (
    <FormControl sx={{ margin: "8px 8px 8px 0px" }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          padding: 0.8,
        }}
        color="outline"
      >
        <MenuItem value="">{label}</MenuItem>
        {data.map((item) => (
          <MenuItem value={item} key={item}>
            <Typography variant="span">{item}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CustomDropdown;
