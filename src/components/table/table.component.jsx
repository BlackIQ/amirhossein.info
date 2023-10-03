import {
  Table,
  TableContainer,
  Paper,
  Box,
  TableHead,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material";

import { tables } from "@/config/tables";

import { useEffect, useState } from "react";

const TableComponent = ({ table, data, change }) => {
  const tbl = tables[table];

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowPerPage] = useState(10);

  const [renderRows, setRenderRows] = useState([]);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    data.map((d, index) => (d["row"] = index + 1));

    setRenderRows(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
  }, [data, page, rowsPerPage]);

  const renderSwitch = (d, i) => {
    switch (table) {
      case "socials":
        switch (i) {
          default:
            return d[i];
        }
      default:
        return d[i];
    }
  };

  return (
    <Box>
      <TableContainer
        variant="elevation"
        sx={{ borderRadius: 1, w: "100%" }}
        component={Paper}
      >
        <Table id={table}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              {Object.values(tbl.fields).map((item) => (
                <TableCell key={item} sx={{ color: "white" }}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableHead>
            {renderRows.map((d) => (
              <TableRow
                key={d}
                onClick={() => change(d)}
                sx={{ "&:hover": { cursor: "pointer", background: "#fafafa" } }}
              >
                {Object.keys(tbl.fields).map((item) => (
                  <TableCell key={item}>{renderSwitch(d, item)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
        </Table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
            px: 3,
          }}
        >
          <Pagination
            sx={{ direction: "ltr" }}
            count={Math.ceil(data.length / rowsPerPage)}
            size="large"
            color="primary"
            page={page}
            onChange={handleChangePage}
          />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
