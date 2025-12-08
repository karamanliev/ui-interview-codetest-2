import { Fade, Skeleton, Stack, styled } from "@mui/material";

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  background: "rgba(0, 0, 0, 0.1)",
  borderRadius: "6px",
  height: 38,
  flex: 1,
}));

function RecommendationsSkeleton() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        flexGrow: 1,
      }}
    >
      <RecommendationItemSkeleton />
      <RecommendationItemSkeleton />
      <RecommendationItemSkeleton />
      <RecommendationItemSkeleton />
    </Stack>
  );
}

export function RecommendationItemSkeleton() {
  return (
    <Fade in timeout={300} unmountOnExit>
      <StyledContainer>
        <Skeleton variant="rounded" width={120} />
        <Skeleton variant="rounded" width={30} />
      </StyledContainer>
    </Fade>
  );
}

export default RecommendationsSkeleton;
