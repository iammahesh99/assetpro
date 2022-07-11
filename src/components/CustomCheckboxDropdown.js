import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Checkbox,
  InputLabel,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const CustomCheckboxDropdown = ({
  checkedValue,
  data,
  handleChange,
  label,
}) => {
  return (
    <FormControl sx={{ width: 200 }} disabled={data.length === 0} size="small">
      {checkedValue.length === 0 && (
        <InputLabel id={label} color="primary">
          {label}
        </InputLabel>
      )}

      <Select
        labelId={label}
        id={label}
        multiple
        value={checkedValue}
        input={<OutlinedInput label={label} />}
        onChange={handleChange}
        MenuProps={MenuProps}
        sx={{ backgroundColor: "white", padding: 0.8 }}
        renderValue={(selected) => selected.map((x) => x.name).join(", ")}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            <Checkbox
              checked={
                checkedValue.findIndex(
                  (checkitem) => checkitem.name === item.name
                ) >= 0
              }
              color="outline"
            />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CustomCheckboxDropdown;
