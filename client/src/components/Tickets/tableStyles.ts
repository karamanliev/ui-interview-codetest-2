import { Box, LinearProgress, styled, Typography } from "@mui/material";

export const HealthBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 24,
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  borderRadius: "4px",
  backgroundColor: theme.palette.action.active,
  color: theme.palette.primary.dark,
  fontSize: 10,
  fontWeight: 700,
  fontFamily: "Mona Sans",
  width: "100%",
}));

export const TextCellContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  width: "100%",
  height: "100%",
}));

export const TextCellLabel = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: "12px",
  color: theme.palette.text.secondary,
  fontFamily: "Instrument Sans",
  fontWeight: 500,
}));

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "100%",
  height: 4,
  borderRadius: 2,
  backgroundColor: "rgba(230, 230, 230, 0.2)",
  "& .MuiLinearProgress-bar": {
    borderRadius: 2,
    backgroundColor: theme.palette.text.secondary,
    transition: "transform 1s ease-out",
  },
}));

export const generateTableStyles = (showPagination: boolean) => ({
  border: "none",
  minHeight: !showPagination ? 0 : "630px",
  borderRadius: "8px",
  overflow: "hidden",
  "--DataGrid-rowBorderColor": "transparent",
  "--DataGrid-t-header-background-base": "transparent",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgba(240, 240, 240, 0.18)",
    mixBlendMode: "plus-lighter",
    textTransform: "uppercase",
    fontSize: "10px",
    fontFamily: "Instrument Sans",
    letterSpacing: "0.06em",
    color: "text.secondary",
    fontWeight: 500,
    minHeight: "47px !important",
    maxHeight: "47px !important",
  },
  "& .MuiDataGrid-iconButtonContainer": {
    "& .MuiIconButton-root": {
      backgroundColor: "transparent !important",
      opacity: 1,
      color: "text.secondary",
      fontSize: "10px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  "& .MuiDataGrid-columnHeader": {
    padding: "0 16px",
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-cell": {
    padding: "0 16px",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "transparent",
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(247, 247, 247, 0.05)",
    },
    "&:hover": {
      backgroundColor: "rgba(247, 247, 247, 0.1)",
    },
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "1px solid rgba(247, 247, 247, 0.1)",
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
});
