import { useSpace } from "@/context/SpaceContext";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";
import SidebarItem from "./SidebarItem";
import SpaceSwitcher from "./SpaceSwitcher";
import { Box, styled } from "@mui/material";
import { useTranslation } from "@/i18n";

const SidebarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  position: sticky;
  padding-left: ${({ theme }) => theme.spacing(8)};
  padding-right: 0;
  height: calc(100vh - 64px);
  top: ${({ theme }) => theme.spacing(8)};
  gap: ${({ theme }) => theme.spacing(6)};
`;

const SidebarCard = styled(Box)`
  flex-grow: 1;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(6)}`};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 24px;
  backdrop-filter: blur(24px);
  box-shadow:
    0px 16px 16px rgba(0, 0, 0, 0.08),
    inset 1px 1px 2px rgba(255, 255, 255, 0.32);
`;

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
      <SidebarCard>
        <SidebarItem title={t("home.title")} link="/" />
        <SidebarItem title={t("tasks.title")} link="/tasks" />
        {currentSpaceId && (
          <SidebarItem
            title={t("teams.title")}
            subItems={teams}
            subItemsLoading={loading}
          />
        )}
      </SidebarCard>
      <SpaceSwitcher
        selected={currentSpaceId}
        options={spaces}
        onChange={setCurrentSpaceId}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
