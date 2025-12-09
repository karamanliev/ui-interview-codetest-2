import MetricCard from "@/components/MetricCard/MetricCard.tsx";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Stack } from "@mui/material";

type Props = {
  currentSpaceId?: string;
};

function Metrics({ currentSpaceId }: Props) {
  const { t } = useTranslation();

  const { data: metricsData } = useQuery(GET_METRICS, {
    variables: {
      spaceId: currentSpaceId!,
    },
    skip: !currentSpaceId,
  });

  const metrics = metricsData?.metrics;
  const { totalRisk, criticalExposures, compliance, speed } = metrics || {};

  const isReallyCriticalExposures = criticalExposures?.value ?? 0 > 0;

  return (
    <Stack direction="row" gap={4} width="100%" sx={{ "& > *": { flex: 1 } }}>
      <MetricCard
        title={t("home.metrics.risk.title")}
        subtitle={t("home.metrics.risk.subtitle")}
        value={totalRisk?.value}
        delta={totalRisk?.delta}
        total={1000}
        positiveDeltaIsBad
      />
      <MetricCard
        title={t("home.metrics.exposures.title")}
        subtitle={t("home.metrics.exposures.subtitle")}
        value={criticalExposures?.value}
        delta={criticalExposures?.delta}
        positiveDeltaIsBad
        total={15}
        {...(isReallyCriticalExposures && {
          progressColor: "error.main",
        })}
        roundNumber
      />
      <MetricCard
        title={t("home.metrics.compliance.title")}
        subtitle={t("home.metrics.compliance.subtitle")}
        value={compliance?.value}
        delta={compliance?.delta}
        specialSymbol="%"
        total={100}
        roundNumber
      />
      <MetricCard
        title={t("home.metrics.remediation.title")}
        subtitle={t("home.metrics.remediation.subtitle")}
        value={(speed?.value ?? 0) / 60}
        delta={(speed?.delta ?? 0) / 60}
        specialSymbol="h"
        total={70}
        greaterDeltaIsBad
      />
    </Stack>
  );
}

export default Metrics;
