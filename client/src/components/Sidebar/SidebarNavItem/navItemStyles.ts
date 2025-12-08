import { ListItemButton, styled } from "@mui/material";

const DOT_COLORS = ["#A7F9AC", "#0A9EAA", "#E21BE0", "#C0E0B0", "#290D7B"];

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => {
  const { spacing, alpha, palette } = theme;

  return {
    height: 43,
    borderRadius: spacing(2),
    "&.active": {
      backgroundColor: alpha(palette.action.active, 0.3),
    },
    "&:hover&:not(.active)": {
      backgroundColor: alpha(theme.palette.action.active, 0.05),
    },
    transition: "background-color 0.15s ease-in-out",
  };
}) as typeof ListItemButton;

export const ColoredDot = styled("span")<{ colorIndex: number }>(
  ({ theme, colorIndex }) => ({
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginRight: theme.spacing(2),
    backgroundColor: DOT_COLORS[colorIndex % DOT_COLORS.length],
    flexShrink: 0,
  }),
);
