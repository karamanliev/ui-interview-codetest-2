import PageLayout from "@/components/layout/PageLayout";
import { useSpace } from "@/context/SpaceContext";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { GET_TICKETS } from "@/graphql/queries/GetTickets";
import { useQuery } from "@apollo/client/react";

function Home() {
  const { currentSpaceId } = useSpace();

  const { data: recommendationsData, loading: isRecommendationsLoading } =
    useQuery(GET_RECOMMENDATIONS, {
      variables: {
        spaceId: currentSpaceId!,
      },
      skip: !currentSpaceId,
    });

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
      title="Home"
      headerComponents={
        <button onClick={() => console.log("btn")}>Button</button>
      }
    >
      <div>
        <h2>Recommendations</h2>
        {isRecommendationsLoading ? (
          <div>Recommendations Loading...</div>
        ) : (
          <div>{JSON.stringify(recommendationsData)}</div>
        )}
      </div>
      <div>
        <h2>Metrics</h2>
        {isMetricsLoading ? (
          <div>Metrics Loading...</div>
        ) : (
          <div>{JSON.stringify(metricsData)}</div>
        )}
      </div>
      <div>
        <h2>Tickets</h2>
        {isTicketsLoading ? (
          <div>Tickets Loading...</div>
        ) : (
          <div>{JSON.stringify(ticketsData)}</div>
        )}
      </div>
    </PageLayout>
  );
}

export default Home;
