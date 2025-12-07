import { Skeleton, Stack } from "@mui/material";

function DashboardLayoutSkeleton() {
  return (
    <Stack direction="column" width={400} gap={4}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  );
}

export default DashboardLayoutSkeleton;
