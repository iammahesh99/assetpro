import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { articleReview } from "../../../api/mockdata/articleReview";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    borderRight: "1px solid white",
  },
  [`&.${tableCellClasses.body}`]: {},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

const Preprocessing = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        "&& .MuiTableHead-root": {
          backgroundColor: "#68BBE3",
        },
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Indication</StyledTableCell>
            <StyledTableCell align="center">Newswire Sites</StyledTableCell>
            <StyledTableCell align="center">Asset</StyledTableCell>
            <StyledTableCell align="center">Phase</StyledTableCell>
            <StyledTableCell align="center">Scrapped Date</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articleReview.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.company}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.indication}</StyledTableCell>
              <StyledTableCell align="center">
                {row.newswire_sites}
              </StyledTableCell>
              <StyledTableCell align="center">{row.asset}</StyledTableCell>
              <StyledTableCell align="center">{row.phase}</StyledTableCell>
              <StyledTableCell align="center">
                {row.scrapped_date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Preprocessing;
