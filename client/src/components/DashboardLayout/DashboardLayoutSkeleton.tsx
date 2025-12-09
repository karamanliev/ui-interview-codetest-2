import { Box, Skeleton, Stack, styled } from "@mui/material";
import ActionBoxSkeleton from "../ActionBox/ActionBoxSkeleton";
import StyledCard from "../StyledCard";
import DashboardLayout from "./DashboardLayout";

const StyledAnimatedStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(8),
  animation: "slideUpFade 500ms ease-out",
  "@keyframes slideUpFade": {
    from: {
      opacity: 0,
      transform: "translateY(8px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

function DashboardLayoutSkeleton() {
  return (
    <DashboardLayout>
      <StyledAnimatedStack>
        <HeaderSkeleton />
        <RecommendationsSkeleton />
        <MetricsSkeleton />
        <TicketsSkeleton />
      </StyledAnimatedStack>
    </DashboardLayout>
  );
}

function HeaderSkeleton() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Skeleton variant="text" width={250} height={52} />
      <Box sx={{ display: "flex", gap: 4 }}>
        <Skeleton
          variant="rounded"
          width={220}
          height={52}
          sx={{ borderRadius: 6 }}
        />
        <Skeleton
          variant="rounded"
          width={86}
          height={52}
          sx={{ borderRadius: 6 }}
        />
      </Box>
    </Stack>
  );
}

function RecommendationsSkeleton() {
  return (
    <StyledCard
      sx={{
        display: "flex",
        gap: 16,
        height: 102,
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Skeleton variant="text" width={200} height={20} />
        <Skeleton variant="text" width={250} height={14} />
      </Stack>
      <Stack direction="row" gap={2}>
        {Array.from({ length: 4 }).map((_, i) => (
          <ActionBoxSkeleton key={i} />
        ))}
      </Stack>
    </StyledCard>
  );
}

function MetricsSkeleton() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 4,
        width: "100%",
        "& > *": { flex: 1 },
      }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <StyledCard
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: 238,
          }}
        >
          <Skeleton variant="circular" width={136} height={136} />
          <Stack sx={{ alignItems: "center", width: "100%" }}>
            <Skeleton variant="text" width="60%" height={18} />
            <Skeleton variant="text" width="80%" height={14} />
          </Stack>
        </StyledCard>
      ))}
    </Stack>
  );
}

function TicketsSkeleton() {
  return (
    <StyledCard
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        height: 750,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack>
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={250} height={14} />
        </Stack>
        <Skeleton variant="rounded" width={90} height={26} />
      </Stack>
      <Skeleton variant="rounded" width="100%" height={600} />
    </StyledCard>
  );
}

export default DashboardLayoutSkeleton;
