import { Typography, styled } from "@mui/material";

const HeadingWrap = styled(Typography)(({ theme }) => ({
  color: "transparent",
  fontWeight: "bold",
  backgroundImage:
    "linear-gradient(90deg, rgba(246,170,159,1) 0%, rgba(245,165,151,1) 0%, rgba(182,109,238,1) 0%, rgba(236,129,99,1) 92%)",
  backgroundClip: "text",
  [theme.breakpoints.down("laptop")]: {
    fontSize: "1rem",
  },
}));

const LargeHeading = ({ variant, label }) => {
  return <HeadingWrap variant={variant}>{label}</HeadingWrap>;
};

export default LargeHeading;
