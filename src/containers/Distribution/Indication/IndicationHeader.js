import { Box } from "@mui/material";
import { useState } from "react";
import CustomDropdown from "../../../components/CustomDropdown";
import CustomButton from "../../../components/CustomButton";
import { Indication } from "../../SME/ArticleReview/ArticleFilterProp";
import { useNavigate } from "react-router-dom";

const IndicationHeader = () => {
  const [indication, setIndication] = useState("");
  const navigation = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <CustomDropdown
          label="Select Indication"
          data={Indication}
          value={indication}
        />
        <CustomDropdown
          label="Select Moa"
          data={Indication}
          value={indication}
        />
        <CustomDropdown
          label="Select Phase"
          data={Indication}
          value={indication}
        />
        <CustomDropdown
          label="Select Segment"
          data={Indication}
          value={indication}
        />
        <Box sx={{ padding: 0.9, display: "flex", alignItems: "center" }}>
          <CustomButton
            variant="outlined"
            size="small"
            color="outline"
            label="Reset"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "16px",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          variant="outlined"
          size="medium"
          label="Indication Overview"
          color="outline"
        />
        <CustomButton
          variant="contained"
          size="medium"
          label="Asset Performance"
          onClick={() => navigation("/performance")}
          sx={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
        />

        <CustomButton
          variant="contained"
          size="medium"
          label="Asset Comparision"
          onClick={() => navigation("/comparision")}
          sx={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
        />
      </Box>
    </>
  );
};
export default IndicationHeader;
