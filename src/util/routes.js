export const SME_REVIEW_PATH = "/sme_review";
export const COMPARISION_PATH = "/comparision";
export const PERFORMANCE_PATH = "/performance";
export const PRE_PROCESSING_PATH = "/pre_processing";
export const POST_PROCESSING_PATH = "/post_processing";
export const ARTICLE_REVIEW_PATH = "/article_review";
export const ASSET_PROFILE_PATH = "/asset_detail";

export const SME_ROUTE = [
  {
    id: 1,
    name: "Pre Processing",
    path: PRE_PROCESSING_PATH,
  },
  {
    id: 2,
    name: "Post Processing",
    path: POST_PROCESSING_PATH,
  },
  {
    id: 3,
    name: "Article Review",
    path: ARTICLE_REVIEW_PATH,
  },
];

export const DISTRIBUTION_ROUTE = [
  {
    id: 1,
    name: "Indication",
    path: "",
  },
  {
    id: 2,
    name: "Moa",
    path: "",
  },
  {
    id: 3,
    name: "Geography",
    path: "",
  },
  {
    id: 4,
    name: "Company",
    path: "",
  },
];

export const Routes = [
  {
    id: 1,
    name: "Home",
    path: "/",

    otherpath: [],
  },
  {
    id: 2,
    name: "SME Review",
    path: SME_REVIEW_PATH,
    otherpath: SME_ROUTE,
  },
  {
    id: 3,
    name: "Distribution",
    path: SME_REVIEW_PATH,
    otherpath: DISTRIBUTION_ROUTE,
  },

  {
    id: 4,
    name: "Comparision",
    path: COMPARISION_PATH,
    otherpath: [],
  },
  {
    id: 5,
    name: "Performance",
    path: PERFORMANCE_PATH,
    otherpath: [],
  },
  {
    id: 6,
    name: "Asset Profile",
    path: ASSET_PROFILE_PATH,
    otherpath: [],
  },
];
