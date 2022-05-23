import { Box, styled, Paper } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
export const CommonWrapper = styled(Box)(({ theme, stylewrapper }) => ({
  backgroundColor: theme.palette.secondary.main,
  minHeight: "90vh",
  borderRadius: "10px 10px 10px 10px",
  padding: "1% 2% 2% 2%",
  ...stylewrapper,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    borderRight: "1px solid white",
    padding: 6,
  },
  [`&.${tableCellClasses.body}`]: {
    border: "1px solid black",
    padding: 8,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  "&& .MuiTableHead-root": {
    backgroundColor: theme.palette.outline.main,
  },
}));

export const HeadingStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "15%",
  left: "3%",
}));
export const ChartWrap = styled(Paper)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: "0% 3% 3% 3%",
  marginBottom: "5%",
}));
