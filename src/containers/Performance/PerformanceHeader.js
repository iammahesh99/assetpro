import { Box } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomDropdown from "../../components/CustomDropdown";
import {
  Indication,
  Company,
  Asset,
  Phase,
} from "../SME/ArticleReview/ArticleFilterProp";

const PerformanceHeader = () => {
  const [indication, setIndication] = useState("");
  const [company, setCompany] = useState("");
  const [asset, setAsset] = useState("");
  const [phase, setPhase] = useState("");

  const handleIndication = (event) => {
    setIndication(event.target.value);
  };
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handleAsset = (event) => {
    setAsset(event.target.value);
  };
  const handlePhase = (event) => {
    setPhase(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "60%",
        justifyContent: "space-between",
      }}
    >
      <CustomDropdown
        label="Select Indication"
        handleChange={handleIndication}
        data={Indication}
        value={indication}
      />
      <CustomDropdown
        label="Select Moa"
        handleChange={handleCompany}
        data={Company}
        value={company}
      />
      <CustomDropdown
        label="Select Phase"
        handleChange={handleAsset}
        data={Asset}
        value={asset}
      />
      <CustomDropdown
        label="Select Segment"
        handleChange={handlePhase}
        data={Phase}
        value={phase}
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
  );
};

export default PerformanceHeader;
