import { useSpace } from "@/context/SpaceContext";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";
import SidebarItem from "./SidebarItem";
import SpaceSwitcher from "./SpaceSwitcher";

function Sidebar() {
  const { currentSpaceId, spaces, setCurrentSpaceId, isLoading } = useSpace();

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId: currentSpaceId ?? "" },
  });

  const teams = data?.teams || [];
  const teamsLoading = loading || isLoading;

  return (
    <>
      <div>
        <SidebarItem title="Home" link="/" />
        <SidebarItem title="Tasks" link="/tasks" />
        <SidebarItem
          title="Teams"
          subItems={teams}
          subItemsLoading={teamsLoading}
        />
      </div>
      <SpaceSwitcher
        selected={currentSpaceId}
        options={spaces}
        onChange={setCurrentSpaceId}
      />
    </>
  );
}

export default Sidebar;
