import { useTranslation } from "@/i18n";
import type { Ticket } from "@/types/graphql";
import { formatRelativeDate } from "@/utils/dateUtils";
import { Box } from "@mui/material";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { AnimatedProgressBar, HealthCell, TextCell } from "./TableComponents";
import { generateTableStyles } from "./tableStyles";

type Props = {
  tableData?: Ticket[];
  loading?: boolean;
  showPagination?: boolean;
};

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
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    setPaginationModel({
      pageSize: showPagination ? 10 : tableData.length || 100,
      page: 0,
    });
  }, [showPagination, tableData.length]);

  const columns: GridColDef<Ticket>[] = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        loading={loading}
        autoHeight={!showPagination}
        initialState={{
          sorting: {
            sortModel: [{ field: "health", sort: "desc" }],
          },
        }}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10]}
        hideFooter={!showPagination}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnResize
        disableRowSelectionOnClick
        sx={generateTableStyles(showPagination)}
      />
    </Box>
  );
}

export default RemediationTable;
