import ActionBoxSkeleton from "@/components/ActionBox/ActionBoxSkeleton";
import { Stack } from "@mui/material";

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
      <ActionBoxSkeleton />
      <ActionBoxSkeleton />
      <ActionBoxSkeleton />
      <ActionBoxSkeleton />
    </Stack>
  );
}

export default RecommendationsSkeleton;
