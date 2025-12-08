import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Grow,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router";
import CollapsibleNavItemSkeleton from "./CollapsibleNavItemSkeleton";
import { ColoredDot, StyledListItemButton } from "./navItemStyles";
import type { NavItemProps } from ".";

type Props = Omit<NavItemProps, "link">;

function CollapsibleNavItem({ title, subItems, subItemsLoading }: Props) {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Box>
      <StyledListItemButton onClick={toggleOpen}>
        <ListItemText
          primary={<Typography variant="body2">{title}</Typography>}
        />
        <ExpandMore
          sx={{
            fill: "#363636",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease-in-out",
          }}
        />
      </StyledListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack component={List} sx={{ gap: 2, pb: 0 }}>
          {subItemsLoading ? (
            <CollapsibleNavItemSkeleton />
          ) : (
            subItems?.map((item, i) => (
              <Grow
                key={item.id}
                in={!subItemsLoading}
                timeout={250 * (i + 1)}
                unmountOnExit
              >
                <StyledListItemButton
                  component={NavLink}
                  to={`/team/${item.id}`}
                  sx={{ height: 34 }}
                >
                  <ColoredDot colorIndex={i} />
                  <ListItemText
                    primary={<Typography noWrap>{item.name}</Typography>}
                  />
                </StyledListItemButton>
              </Grow>
            ))
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default CollapsibleNavItem;
