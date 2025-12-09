import type { Team } from "@/types/graphql";
import { ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router";
import CollapsibleNavItem from "./CollapsibleNavItem";
import { StyledListItemButton } from "./navItemStyles";

export type NavItemProps =
  | {
      title: string;
      link: string;
      subItems?: undefined;
      showSkeleton?: never;
    }
  | {
      title: string;
      link?: undefined;
      subItems: Team[];
      showSkeleton?: boolean;
    };

function SidebarNavItem({ title, link, subItems, showSkeleton }: NavItemProps) {
  if (!subItems) {
    return (
      <StyledListItemButton component={NavLink} to={link ?? "#"}>
        <ListItemText
          primary={<Typography variant="body2">{title}</Typography>}
        />
      </StyledListItemButton>
    );
  }

  return (
    <CollapsibleNavItem
      title={title}
      subItems={subItems}
      showSkeleton={showSkeleton}
    />
  );
}

export default SidebarNavItem;
