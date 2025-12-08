import { styled } from "@mui/material";
import { DayPicker, type DateRange } from "react-day-picker";

type Props = {
  selected: DateRange;
  setSelected: (selected: DateRange) => void;
};

const StyledCalendarWrapper = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,

  "& .rdp-root": {
    "--rdp-accent-color": theme.palette.primary.main,
    "--rdp-accent-background-color": theme.alpha(
      theme.palette.primary.main,
      0.25,
    ),
    "--rdp-today-color": theme.palette.secondary.main,
  },
}));

function Calendar({ selected, setSelected }: Props) {
  return (
    <StyledCalendarWrapper>
      <DayPicker
        animate
        mode="range"
        onMonthChange={(month) => setSelected({ from: month })}
        weekStartsOn={1}
        min={1}
        required
        selected={selected}
        onSelect={setSelected}
        styles={{
          month_caption: {
            fontFamily: "Mona Sans",
          },
        }}
      />
    </StyledCalendarWrapper>
  );
}

export default Calendar;
