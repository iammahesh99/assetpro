import { Box } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const ComparisionHeader = () => {
  return (
    <Box
      sx={{
        padding: "1% 0% 1% 0%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { laptop: "40%", tablet: "60%" },
        }}
      >
        <CustomButton
          variant="outlined"
          size="small"
          label="Edit"
          color="outline"
          startIcons={<ModeEditOutlinedIcon />}
        />
        <CustomButton
          variant="outlined"
          size="small"
          label="Delete"
          color="outline"
          startIcons={<DeleteOutlineOutlinedIcon />}
        />
        <CustomButton
          variant="outlined"
          size="small"
          label="New"
          color="outline"
          startIcons={<AddOutlinedIcon />}
        />
        <CustomButton
          variant="outlined"
          size="small"
          color="outline"
          label="Hide/Show Columns"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { laptop: "22%", tablet: "37%" },
        }}
      >
        <CustomButton
          variant="contained"
          label="Asset Performance"
          size="small"
          sx={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
        />
        <CustomButton
          variant="contained"
          label="Compare"
          size="small"
          sx={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
        />
      </Box>
    </Box>
  );
};
export default ComparisionHeader;
