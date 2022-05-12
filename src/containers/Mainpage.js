import { Box } from "@mui/material";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import ArticleMain from "./SME/ArticleReview/ArticleMain";
import PostMain from "./SME/Postprocessing/PostMain";
import PreMain from "./SME/Preprocessing/PreMain";
import {
  ARTICLE_REVIEW_PATH,
  PRE_PROCESSING_PATH,
  POST_PROCESSING_PATH,
  COMPARISION_PATH,
  PERFORMANCE_PATH,
  ASSET_PROFILE_PATH,
  INDICATION_PATH,
} from "../util/routes";
import Comparision from "./Comparision/Comparision";
import Performance from "./Performance/Performance";
import AssetProfile from "./AssetProfile/AssetProfile";
import Indication from "./Distribution/Indication/Indication";

const Mainpage = () => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ARTICLE_REVIEW_PATH} element={<ArticleMain />} />
        <Route path={PRE_PROCESSING_PATH} element={<PreMain />} />
        <Route path={POST_PROCESSING_PATH} element={<PostMain />} />
        <Route path={COMPARISION_PATH} element={<Comparision />} />
        <Route path={PERFORMANCE_PATH} element={<Performance />} />
        <Route path={ASSET_PROFILE_PATH} element={<AssetProfile />} />
        <Route path={INDICATION_PATH} element={<Indication />} />
      </Routes>
    </Box>
  );
};
export default Mainpage;
