import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const CustomButton = ({
  size,
  startIcons,
  endIcons,
  variant,
  color,
  label,
  ...restProps
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcons}
      endIcon={endIcons}
      size={size}
      color={color}
      {...restProps}
    >
      <Typography variant="body2">{label}</Typography>
    </Button>
  );
};
export default CustomButton;
