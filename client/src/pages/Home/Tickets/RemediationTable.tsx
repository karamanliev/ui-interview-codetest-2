import { useTranslation } from "@/i18n";
import type { Ticket } from "@/types/graphql";
import { formatRelativeDate } from "@/utils/dateUtils";
import { Box } from "@mui/material";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import { useState } from "react";
import { AnimatedProgressBar, HealthCell, TextCell } from "./TableComponents";
import { generateTableStyles } from "./tableStyles";

type Props = {
  tableData?: Ticket[];
  loading?: boolean;
  showPagination?: boolean;
};

const PAGE_SIZE = 10;
const OWNER_MAP: Record<string, string> = {
  "1": "Jane Doe",
  "2": "Bruce Wayne",
};

function RemediationTable({
  tableData = [],
  loading = false,
  showPagination = true,
}: Props) {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const pageSize = showPagination ? PAGE_SIZE : tableData.length;
  const paginationModel = { pageSize, page };

  const columns: GridColDef<Ticket>[] = [
    {
      field: "health",
      headerName: t("home.tickets.tableColumns.health"),
      flex: 0.3,
      minWidth: 50,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Ticket, number>) => (
        <HealthCell value={params.value || 0} />
      ),
    },
    {
      field: "title",
      headerName: t("home.tickets.tableColumns.ticket"),
      flex: 2,
      minWidth: 200,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Ticket, string>) => (
        <TextCell title={params.value || ""} showIcon />
      ),
    },
    {
      field: "createdAt",
      headerName: t("home.tickets.tableColumns.created"),
      flex: 0.5,
      minWidth: 80,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Ticket, string>) => {
        const formattedDate = formatRelativeDate(params.value || "");
        return <TextCell title={formattedDate} />;
      },
    },
    {
      field: "ownerId",
      headerName: t("home.tickets.tableColumns.owner"),
      flex: 0.5,
      minWidth: 80,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Ticket, string>) => {
        const ownerName = OWNER_MAP[params.value || ""];
        return <TextCell title={ownerName} />;
      },
    },
    {
      field: "progress",
      headerName: t("home.tickets.tableColumns.progress"),
      flex: 0.8,
      minWidth: 120,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Ticket, number>) => (
        <AnimatedProgressBar value={params.value || 0} />
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        loading={loading}
        autoHeight={!showPagination}
        initialState={{
          pagination: {
            paginationModel: { pageSize: PAGE_SIZE },
          },
          sorting: {
            sortModel: [{ field: "health", sort: "desc" }],
          },
        }}
        pageSizeOptions={[PAGE_SIZE]}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => setPage(model.page)}
        hideFooter={!showPagination}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnResize
        disableRowSelectionOnClick
        sx={generateTableStyles(showPagination, PAGE_SIZE)}
      />
    </Box>
  );
}

export default RemediationTable;
