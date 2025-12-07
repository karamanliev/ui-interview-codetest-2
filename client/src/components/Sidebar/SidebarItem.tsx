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
  subItems: Array<{ title: string; link: string }>;
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
        <NavLink to={`/team/${item.link}`}>{item.title}</NavLink>
      ))}
    </>
  );
}

export default SidebarItem;
