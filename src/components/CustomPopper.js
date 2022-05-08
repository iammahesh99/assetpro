import { Popper } from "@mui/material";

const CustomPopper = ({ content, placement, open, anchorEl }) => {
  return (
    <Popper open={open} placement={placement} anchorEl={anchorEl}>
      {content}
    </Popper>
  );
};
export default CustomPopper;
