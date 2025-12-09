import StyledCard from "@/components/StyledCard";
import type { Space } from "@/types/graphql";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  MenuItem,
  Select,
  Typography,
  type MenuProps,
  type SelectChangeEvent,
  type SvgIconProps,
} from "@mui/material";
import { useCallback, useState } from "react";
import SpaceSwitcherSkeleton from "./SpaceSwitcherSkeleton";

type Props = {
  selected: string | undefined;
  options: Space[];
  onChange: (value: string | undefined) => void;
  showSkeleton?: boolean;
};

function SpaceSwitcher({ selected, options, onChange, showSkeleton }: Props) {
  const [open, setOpen] = useState(false);

  const renderIconComponent = useCallback(
    (props: SvgIconProps) => (
      <ExpandMore
        {...props}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        sx={{
          position: "relative !important",
          ml: 1,
          fontSize: "16px",
          transition: "transform 0.15s ease-in-out",
          cursor: "pointer",
          pointerEvents: "auto !important",
        }}
      />
    ),
    [],
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    onChange(value || undefined);
  };

  if (showSkeleton || options.length === 0) {
    return <SpaceSwitcherSkeleton iconComponent={renderIconComponent} />;
  }

  return (
    <StyledCard
      variant="nav"
      onClick={() => setOpen(!open)}
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          boxShadow:
            "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 4px 6px rgba(255, 255, 255, 0.45)",
        },
      }}
    >
      <Box onClick={(e) => e.stopPropagation()} sx={{ width: "100%" }}>
        <Select
          value={selected || ""}
          onChange={handleChange}
          fullWidth
          IconComponent={renderIconComponent}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          SelectDisplayProps={{
            style: {
              padding: 0,
            },
          }}
          MenuProps={MENU_PROPS}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {options.map((space) => (
            <MenuItem key={space.id} value={space.id}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <img
                  src={space.avatar}
                  alt={space.name}
                  style={{ width: 24, height: 24, position: "absolute" }}
                />
                <Typography noWrap sx={{ paddingLeft: "24px" }}>
                  {space.name}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </Box>
    </StyledCard>
  );
}

const MENU_PROPS: Omit<MenuProps, "open"> = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  slotProps: {
    list: {
      sx: {
        padding: 0,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      },
    },
    paper: {
      sx: {
        borderRadius: "24px",
        backdropFilter: "blur(24px)",
        boxShadow:
          "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.32)",
        marginLeft: "-24px",
        marginTop: "-24px",
        "& .MuiMenuItem-root": {
          py: 4,
        },
      },
    },
  },
};

export default SpaceSwitcher;
