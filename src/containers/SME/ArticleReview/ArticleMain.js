import { Box, Divider } from "@mui/material";
import AdvanceFilter from "../../Home/AdvanceFilter";
import LargeHeading from "../../../components/Heading";
import Presentation from "./Presentation";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import { getCompleted } from "../../../store/SME/ArticleReview/slice";

const ArticleMain = () => {
  const completed = useSelector((state) => state.articleData.complete);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getCompleted(false));
  };
  return (
    <Box>
      <Box
        sx={{
          padding: "0px 0px 8px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Article Review" />
        {completed ? (
          <CustomButton
            variant="contained"
            label="Back"
            size="small"
            onClick={handleClick}
            sx={{
              background:
                "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            }}
          />
        ) : (
          <AdvanceFilter />
        )}
      </Box>
      <Divider sx={{ marginBottom: "5px" }} />
      <Presentation />
    </Box>
  );
};

export default ArticleMain;
