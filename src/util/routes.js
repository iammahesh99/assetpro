import HomeIcon from "@mui/icons-material/Home";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export const SME_REVIEW_PATH = "/sme_review";
export const COMPARISION_PATH = "/comparision";
export const PERFORMANCE_PATH = "/performance";

export const Routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <HomeIcon fontSize="large" />,
    otherpath: [],
  },
  {
    id: 2,
    name: "SME Review",
    path: SME_REVIEW_PATH,
    icon: <ReviewsIcon fontSize="large" />,
    otherpath: [],
  },

  {
    id: 3,
    name: "Comparision",
    path: COMPARISION_PATH,
    icon: <CompareArrowsIcon fontSize="large" />,
    otherpath: [],
  },
  {
    id: 4,
    name: "Performance",
    path: PERFORMANCE_PATH,
    icon: <AutoGraphIcon fontSize="medium" />,
    otherpath: [],
  },
];
