import Button from "@mui/material/Button";
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
      {label}
    </Button>
  );
};
export default CustomButton;

// <CustomButton variant="outlined" size="medium" label="Edit" />
//     <CustomButton
//       variant="contained"
//       label="Download"
//       endIcons={<CloudDownloadOutlinedIcon />}
//       sx={{
//         background:
//           "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
//       }}
//     />
//     <CustomButton
//       variant="contained"
//       label="Upload"
//       endIcons={<FileUploadOutlinedIcon />}
//     />
