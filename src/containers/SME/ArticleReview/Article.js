import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticleList } from "../../../store/SME/ArticleReview/thunk";
import { API_STATUS } from "../../../util/api_helper";
import { Typography } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../CommonStyle";
import TableRow from "@mui/material/TableRow";
import { StyledTableContainer } from "../../CommonStyle";
import {
  getCompleted,
  getSelectData,
} from "../../../store/SME/ArticleReview/slice";

const Article = () => {
  const articleData = useSelector((state) => state.articleData.data);
  const loadStatus = useSelector((state) => state.articleData.loadStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadStatus === API_STATUS.IDLE) {
      dispatch(getArticleList());
    }
  }, [loadStatus]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleClick = (id) => {
    dispatch(getCompleted(true));
    dispatch(getSelectData(id));
  };
  return (
    <>
      {loadStatus === API_STATUS.COMPLETED ? (
        <StyledTableContainer component={Paper}>
          <Table aria-label="customized table">
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
              {articleData.map((row) => (
                <StyledTableRow
                  key={row._id}
                  onClick={() => handleClick(row._id)}
                >
                  <StyledTableCell>
                    <Typography variant="span">{row.company}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span">{row.article_title}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span">{row.indication}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span">{row.newswire_site}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span">{row.asset}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span">{row.phase}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span"> {row.publish_date}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography variant="span"> {row.status}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      ) : null}
    </>
  );
};
export default Article;
