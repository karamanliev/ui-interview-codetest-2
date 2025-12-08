import DateRangePicker from "@/components/DateRangePicker";
import PageLayout from "@/components/layout/PageLayout";
import { Recommendations } from "@/components/Recommendations";
import SearchButton from "@/components/SearchButton";
import StyledCard from "@/components/StyledCard";
import { useSpace } from "@/context/SpaceContext";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { GET_TICKETS } from "@/graphql/queries/GetTickets";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Typography } from "@mui/material";

function Home() {
  const { t } = useTranslation();
  const { currentSpaceId } = useSpace();

  const { data: metricsData, loading: isMetricsLoading } = useQuery(
    GET_METRICS,
    {
      variables: {
        spaceId: currentSpaceId!,
      },
      skip: !currentSpaceId,
    },
  );

  const { data: ticketsData, loading: isTicketsLoading } = useQuery(
    GET_TICKETS,
    {
      variables: {
        spaceId: currentSpaceId!,
      },
      skip: !currentSpaceId,
    },
  );

  return (
    <PageLayout
      title={t("home.title")}
      headerComponents={
        <>
          <DateRangePicker />
          <SearchButton />
        </>
      }
    >
      <Recommendations currentSpaceId={currentSpaceId} />
      <StyledCard>
        <Typography variant="h2">Metrics</Typography>
        {isMetricsLoading ? (
          <div>Metrics Loading...</div>
        ) : (
          <div>{JSON.stringify(metricsData)}</div>
        )}
      </StyledCard>
      <StyledCard>
        <Typography variant="h2">Tickets</Typography>
        {isTicketsLoading ? (
          <div>Tickets Loading...</div>
        ) : (
          <div>{JSON.stringify(ticketsData)}</div>
        )}
      </StyledCard>
    </PageLayout>
  );
}

export default Home;
