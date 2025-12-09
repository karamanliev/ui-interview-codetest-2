import { getDateRangeLabel } from "@/utils/dateUtils";
import { FilterList } from "@mui/icons-material";
import { Button, Popover, styled, Typography } from "@mui/material";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import Calendar from "./Calendar";

const StyledDateRangePickerButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  height: 51,
  minWidth: 220,
  borderRadius: 24,
  backdropFilter: "blur(12px)",
  transition: "all 0.3s ease-in-out",
  boxShadow:
    "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.32)",
  background: "rgba(245, 245, 245, 0.8)",
  "&:hover": {
    boxShadow:
      "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 2px 8px rgba(86, 41, 198, 0.9)",
  },
}));

function DateRangePicker() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<DateRange>({ from: new Date() });
  const open = Boolean(anchorEl);

  return (
    <>
      <StyledDateRangePickerButton
        onClick={(e) => {
          setAnchorEl(e?.currentTarget);
        }}
      >
        <Typography sx={{ color: "primary.dark" }}>
          {getDateRangeLabel(selected)}
        </Typography>
        <FilterList sx={{ fontSize: 16, color: "primary.dark", ml: 6 }} />
      </StyledDateRangePickerButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          top: 8,
          "& .MuiPaper-root": {
            elevation: 0,
            background: "rgba(86, 41, 198, 0.3)",
            backdropFilter: "blur(12px)",
            borderRadius: 6,
          },
        }}
      >
        <Calendar selected={selected} setSelected={setSelected} />
      </Popover>
    </>
  );
}

export default DateRangePicker;
