import type { Team } from "@/types/graphql";
import { NavLink } from "react-router";

type SidebarItemProps = {
  title: string;
  link: string;
  subItems?: never;
  subItemsLoading?: never;
};

type SidebarItemWithSubItemsProps = {
  title: string;
  link?: string;
  subItems: Omit<Team, "spaceId">[];
  subItemsLoading?: boolean;
};

type Props = SidebarItemProps | SidebarItemWithSubItemsProps;

function SidebarItem({ title, link, subItems, subItemsLoading }: Props) {
  if (!subItems) {
    return (
      <NavLink to={link}>
        <div>{title}</div>
      </NavLink>
    );
  }

  return (
    <>
      <div>{title}</div>
      {subItemsLoading && <div>Loading the teams...</div>}
      {subItems.map((item) => (
        <NavLink key={item.id} to={`/team/${item.id}`}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default SidebarItem;
