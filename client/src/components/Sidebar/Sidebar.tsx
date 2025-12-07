import { useSpace } from "@/context/SpaceContext";
import SidebarItem from "./SidebarItem";
import { useQuery } from "@apollo/client/react";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";

function Sidebar() {
  const { currentSpaceId, isLoading } = useSpace();

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId: currentSpaceId ?? "" },
  });

  const teamsArr = data?.teams || [];
  const mappedTeamsArr = teamsArr.map((team) => ({
    link: team.id,
    title: team.name,
  }));

  const teamsLoading = loading || isLoading;

  return (
    <div>
      <SidebarItem title="Home" link="/" />
      <SidebarItem title="Tasks" link="/tasks" />
      <SidebarItem
        title="Teams"
        subItems={mappedTeamsArr}
        subItemsLoading={teamsLoading}
      />
    </div>
  );
}

export default Sidebar;
