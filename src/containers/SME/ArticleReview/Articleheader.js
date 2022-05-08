import { Box } from "@mui/material";
import { useState } from "react";
import { Indication, Company, Asset, Phase } from "./ArticleFilterProp";
import CustomDropdown from "../../../components/CustomDropdown";
import CustomButton from "../../../components/CustomButton";

const ArticleHeader = () => {
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
        justifyContent: "flex-start",
      }}
    >
      <CustomDropdown
        label="Indication"
        handleChange={handleIndication}
        data={Indication}
        value={indication}
      />
      <CustomDropdown
        label="Company"
        handleChange={handleCompany}
        data={Company}
        value={company}
      />
      <CustomDropdown
        label="Asset"
        handleChange={handleAsset}
        data={Asset}
        value={asset}
      />
      <CustomDropdown
        label="Phase"
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

export default ArticleHeader;
