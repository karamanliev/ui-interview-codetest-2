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
  link?: never;
  subItems?: Team[];
  subItemsLoading?: boolean;
};

type Props = SidebarItemProps | SidebarItemWithSubItemsProps;

function SidebarItem({ title, link, subItems, subItemsLoading }: Props) {
  if (!subItems) {
    return (
      <NavLink to={link ?? "#"}>
        <div>{title}</div>
      </NavLink>
    );
  }

  return (
    <>
      <div>{title}</div>
      {subItemsLoading ? (
        <div>Loading the teams...</div>
      ) : (
        subItems?.map((item) => (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <NavLink to={`/team/${item.id}`}>{item.name}</NavLink>
          </div>
        ))
      )}
    </>
  );
}

export default SidebarItem;
