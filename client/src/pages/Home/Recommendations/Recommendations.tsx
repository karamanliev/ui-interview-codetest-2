import ActionBox from "@/components/ActionBox/ActionBox";
import StyledCard from "@/components/StyledCard";
import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Box, Stack, Typography } from "@mui/material";
import RecommendationsSkeleton from "./RecommendationsSkeleton";

type Props = {
  currentSpaceId?: string;
};

function Recommendations({ currentSpaceId }: Props) {
  const { t } = useTranslation();
  const { data: recommendationsData, loading: isRecommendationsLoading } =
    useQuery(GET_RECOMMENDATIONS, {
      variables: {
        spaceId: currentSpaceId!,
      },
      skip: !currentSpaceId,
    });

  const { recommendations, reports } = recommendationsData || {};
  const { readyToFix, readyToReview, approachingSla } = recommendations || {};

  const showSkeleton = isRecommendationsLoading || !currentSpaceId;

  return (
    <StyledCard sx={{ display: "flex", gap: 16 }}>
      <Box>
        <Typography variant="body2" sx={{ fontSize: 16, lineHeight: 1.2 }}>
          {t("home.recommendations.title")}
        </Typography>
        <Typography>{t("home.recommendations.subtitle")}</Typography>
      </Box>

      {showSkeleton ? (
        <RecommendationsSkeleton />
      ) : (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            flexGrow: 1,
          }}
        >
          <ActionBox
            action={readyToFix ?? 0}
            translationKey="home.recommendations.fixes"
            actionLabel={t("common.fix")}
          />
          <ActionBox
            action={readyToReview ?? 0}
            translationKey="home.recommendations.review"
            actionLabel={t("common.view")}
          />
          <ActionBox
            action={approachingSla ?? 0}
            translationKey="home.recommendations.tasks"
            actionLabel={t("common.view")}
          />
          {reports?.map((report) => (
            <ActionBox
              key={report.id}
              action={report.name}
              translationKey="home.recommendations.quarterlyReport"
              translationTemplate="report"
              actionLabel={t("common.view")}
            />
          ))}
        </Stack>
      )}
    </StyledCard>
  );
}

export default Recommendations;
