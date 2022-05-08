import { Box, styled } from "@mui/system";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import CustomButton from "../../../../components/CustomButton";
const DetailWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  marginTop: "2em",
  padding: "0px 16px 10px 16px",
}));

const ArticleDetailContent = () => {
  const articleData = useSelector((state) => state.articleData.selectData);
  const [header, setHeader] = useState(articleData[0].related);
  const handleClose = (itemId) => {
    setHeader(header.filter((id) => id._id !== itemId));
  };
  return (
    <>
      {header.map((item, index) =>
        item.text ? (
          <DetailWrapper key={item._id}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CloseIcon
                onClick={() => handleClose(item._id)}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "red",
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "50%" }}>
                <Box>
                  <Typography variant="span" sx={{ lineHeight: "2em" }}>
                    {item.text}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Box>
                    <Typography variant="h7">
                      <span style={{ marginRight: "5px" }}>&#127773;</span>
                      {item.sentiment}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="span">
                      <b>Topic: </b>
                      {item.topic}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "40%" }}>
                <Box>
                  <Typography variant="span" sx={{ lineHeight: "1em" }}>
                    Right side
                  </Typography>
                </Box>
              </Box>
            </Box>
          </DetailWrapper>
        ) : null
      )}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          variant="contained"
          size="small"
          color="error"
          label="Cancel"
          startIcon={<CloseIcon />}
          sx={{ m: 1, p: ".5em" }}
        />
        <CustomButton
          variant="contained"
          size="small"
          color="success"
          label="Save"
          startIcon={<SaveIcon />}
          sx={{ m: 1, p: ".5em" }}
        />
      </Box>
    </>
  );
};
export default ArticleDetailContent;

// {
//   index === 0
//     ? item.entities.map((entity) => (
//         <Box>
//           <Typography variant="span" sx={{ lineHeight: "1em" }}>
//             hello
//           </Typography>
//         </Box>
//       ))
//     : null;
// }
