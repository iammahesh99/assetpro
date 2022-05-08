import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableContainer,
} from "../../../CommonStyle";

const ArticleTableDetail = () => {
  const articleData = useSelector((state) => state.articleData.selectData);

  return (
    <>
      <StyledTableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="center">Indication</StyledTableCell>
              <StyledTableCell align="center">Url</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Newswire site</StyledTableCell>
              <StyledTableCell align="center">Asset</StyledTableCell>
              <StyledTableCell align="center">Phase</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articleData.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell>
                  <Typography variant="span">{row.company}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.indication}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.article_url}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.article_title}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.newswire_site}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span">{row.asset}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="span"> {row.phase}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};
export default ArticleTableDetail;
