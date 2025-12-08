import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Box, Stack, Typography } from "@mui/material";
import StyledCard from "../StyledCard";
import RecommendationItem from "./RecommendationItem";
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

  return (
    <StyledCard sx={{ display: "flex", gap: 16 }}>
      <Box>
        <Typography variant="body2" sx={{ fontSize: 16, lineHeight: 1.2 }}>
          {t("home.recommendations.title")}
        </Typography>
        <Typography>{t("home.recommendations.subtitle")}</Typography>
      </Box>

      {isRecommendationsLoading ? (
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
          <RecommendationItem
            recommendation={readyToFix ?? 0}
            translationKey="home.recommendations.fixes"
            actionLabel={t("common.fix")}
          />
          <RecommendationItem
            recommendation={readyToReview ?? 0}
            translationKey="home.recommendations.review"
            actionLabel={t("common.view")}
          />
          <RecommendationItem
            recommendation={approachingSla ?? 0}
            translationKey="home.recommendations.tasks"
            actionLabel={t("common.view")}
          />
          {reports?.map((report) => (
            <RecommendationItem
              recommendation={report.name}
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
