import { List, Stack } from "@mui/material";
import { useTranslation } from "@/i18n";
import SidebarNavItem from "./SidebarNavItem";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";

type Props = {
  currentSpaceId?: string;
};

function SidebarNav({ currentSpaceId }: Props) {
  const { t } = useTranslation();

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId: currentSpaceId! },
    skip: !currentSpaceId,
  });

  const teams = data?.teams || [];

  return (
    <Stack component={List} disablePadding sx={{ gap: 4 }}>
      <SidebarNavItem title={t("home.title")} link="/" />
      <SidebarNavItem title={t("tasks.title")} link="/tasks" />
      <SidebarNavItem
        title={t("teams.title")}
        subItems={teams}
        subItemsLoading={loading}
      />
    </Stack>
  );
}

export default SidebarNav;
