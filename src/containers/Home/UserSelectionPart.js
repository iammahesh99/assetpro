import { Box, styled, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UserFilterSelection = styled(Box)(({ theme }) => ({
  background: theme.palette.outline.main,
  padding: "2%",
  alignItems: "center",
  marginBottom: "2%",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    border: "1px solid white",
    padding: 6,
  },
  [`&.${tableCellClasses.body}`]: {
    border: "1px solid white",
    color: theme.palette.secondary.main,
    padding: 8,
  },
}));

const userAssetTable = () => {
  return (
    <TableContainer sx={{ margin: "2% 0% 2% 0%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Indication</StyledTableCell>
            <StyledTableCell align="center">Top Ranking Asset</StyledTableCell>
            <StyledTableCell align="center">Efficacy Score</StyledTableCell>
            <StyledTableCell align="center">
              Safety Parameter Score
            </StyledTableCell>
            <StyledTableCell align="center">Final Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell align="center">AML</StyledTableCell>
            <StyledTableCell align="center">Magrolimab</StyledTableCell>
            <StyledTableCell align="center">4</StyledTableCell>
            <StyledTableCell align="center">3</StyledTableCell>
            <StyledTableCell align="center">3.5</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const UserSelectionPart = () => {
  return (
    <UserFilterSelection>
      <Typography
        variant="paragraph"
        color="secondary"
        sx={{ lineHeight: "1.5em" }}
      >
        Hi James ,<br />
        Welcome to Assetpro. Please find our analysis based on your selection.
        <br />
      </Typography>
      {userAssetTable()}
      <Typography
        variant="paragraph"
        color="secondary"
        sx={{ lineHeight: "1.5em" }}
      >
        if You want to compare assets please click on "Asset Comparision"
        <br />
        please click "Asset Ranking" to evaluate top 10 assets based on
        "efficacy" , "safety parameter" and "Market Potential" for your selected
        indication- AML.
      </Typography>
    </UserFilterSelection>
  );
};
export default UserSelectionPart;
