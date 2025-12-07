import { useSpace } from "@/context/SpaceContext";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";
import SidebarItem from "./SidebarItem";
import SpaceSwitcher from "./SpaceSwitcher";
import { Box, styled } from "@mui/material";
import { useTranslation } from "@/i18n";
import StyledCard from "../StyledCard";

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  paddingLeft: theme.spacing(8),
  paddingRight: 0,
  height: "calc(100vh - 64px)",
  top: theme.spacing(8),
  gap: theme.spacing(6),
}));

function Sidebar() {
  const { t } = useTranslation();
  const { currentSpaceId, spaces, setCurrentSpaceId } = useSpace();

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId: currentSpaceId! },
    skip: !currentSpaceId,
  });

  const teams = data?.teams || [];

  return (
    <SidebarContainer>
      <StyledCard variant="nav" sx={{ flexGrow: 1 }}>
        <SidebarItem title={t("home.title")} link="/" />
        <SidebarItem title={t("tasks.title")} link="/tasks" />
        {currentSpaceId && (
          <SidebarItem
            title={t("teams.title")}
            subItems={teams}
            subItemsLoading={loading}
          />
        )}
      </StyledCard>
      <SpaceSwitcher
        selected={currentSpaceId}
        options={spaces}
        onChange={setCurrentSpaceId}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
