import DateRangePicker from "@/components/DateRangePicker";
import PageLayout from "@/components/PageLayout";
import SearchButton from "@/components/SearchButton";
import StyledCard from "@/components/StyledCard";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import useSpace from "@/hooks/useSpace.ts";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Typography } from "@mui/material";
import Recommendations from "./Recommendations/Recommendations.tsx";
import Tickets from "./Tickets/Tickets";

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

      <Tickets currentSpaceId={currentSpaceId} />
    </PageLayout>
  );
}

export default Home;
