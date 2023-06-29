import { 
  Paper, 
  TableCell, 
  TableRow, 
  Table, 
  TableBody, 
  TableContainer, 
  TableHead 
} from "@mui/material";
import { tableStyle } from "./style";

const BasicTable = ({ tableHeadList, children }) => {
  return (
    <TableContainer component={Paper}>
      <Table 
        sx={tableStyle} 
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {tableHeadList.map(element => (
              <TableCell key={element.title}>{element.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable;