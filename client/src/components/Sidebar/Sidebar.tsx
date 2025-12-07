import { useSpace } from "@/context/SpaceContext";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";
import SidebarItem from "./SidebarItem";
import SpaceSwitcher from "./SpaceSwitcher";
import { Box } from "@mui/material";

function Sidebar() {
  const { currentSpaceId, spaces, setCurrentSpaceId } = useSpace();

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId: currentSpaceId! },
    skip: !currentSpaceId,
  });

  const teams = data?.teams || [];

  return (
    <Box>
      <div>
        <SidebarItem title="Home" link="/" />
        <SidebarItem title="Tasks" link="/tasks" />
        {currentSpaceId && (
          <SidebarItem
            title="Teams"
            subItems={teams}
            subItemsLoading={loading}
          />
        )}
      </div>
      <div style={{ marginTop: 20 }}>
        <SpaceSwitcher
          selected={currentSpaceId}
          options={spaces}
          onChange={setCurrentSpaceId}
        />
      </div>
    </Box>
  );
}

export default Sidebar;
