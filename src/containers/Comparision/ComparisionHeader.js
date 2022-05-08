import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown";
import CustomButton from "../../components/CustomButton";
import { Indication } from "../SME/ArticleReview/ArticleFilterProp";
const HeadingWrap = styled(Typography)(({ theme }) => ({
  color: theme.palette.outline.main,
  fontWeight: "bold",
}));

const ComparisionHeader = () => {
  const [indication, setIndication] = useState("");
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Box>
            <HeadingWrap variant="body2">Clinical</HeadingWrap>
            <CustomDropdown label="Roa" data={Indication} value={indication} />
            <CustomDropdown
              label="Phase"
              data={Indication}
              value={indication}
            />
            <CustomDropdown
              label="Dosing"
              data={Indication}
              value={indication}
            />
          </Box>
          <Box>
            <HeadingWrap variant="body2">Biological</HeadingWrap>
            <CustomDropdown label="Moa" data={Indication} value={indication} />
            <CustomDropdown
              label="Modality"
              data={Indication}
              value={indication}
            />
          </Box>
          <Box>
            <HeadingWrap variant="body2">Comercial</HeadingWrap>
            <CustomDropdown
              label="Company"
              data={Indication}
              value={indication}
            />
            <CustomDropdown label="IP" data={Indication} value={indication} />
          </Box>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <CustomButton
                variant="contained"
                size="small"
                label="Asset Performance"
                sx={{
                  background:
                    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <CustomButton
                variant="contained"
                size="small"
                label="Compare"
                sx={{
                  background:
                    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ComparisionHeader;
