import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../CommonStyle";
import TableRow from "@mui/material/TableRow";
import { StyledTableContainer } from "../CommonStyle";
import { articleReview } from "../../api/mockdata/articleReview";

const ComparisionTable = () => {
  return (
    <>
      <StyledTableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Asset</StyledTableCell>
              <StyledTableCell align="center">Roa</StyledTableCell>
              <StyledTableCell align="center">Company</StyledTableCell>
              <StyledTableCell align="center">Moa</StyledTableCell>
              <StyledTableCell align="center">Indication</StyledTableCell>
              <StyledTableCell align="center">Phase</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articleReview.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>
                  <Typography variant="span">{row.asset}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.newswire_sites}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.company}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.newswire_site}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.indication}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.phase}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};
export default ComparisionTable;
