import { Box, Skeleton, Stack } from "@mui/material";
import ActionBoxSkeleton from "../ActionBox/ActionBoxSkeleton";
import StyledCard from "../StyledCard";
import DashboardLayout from "./DashboardLayout";

function DashboardLayoutSkeleton() {
  return (
    <DashboardLayout>
      <Stack
        sx={{
          gap: 8,
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
          animation: "slideUpFade 500ms ease-out",
        }}
      >
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
            <ActionBoxSkeleton />
            <ActionBoxSkeleton />
            <ActionBoxSkeleton />
            <ActionBoxSkeleton />
          </Stack>
        </StyledCard>

        <StyledCard
          sx={{
            display: "flex",
            gap: 16,
            height: 136,
            justifyContent: "space-between",
          }}
        >
          <Skeleton variant="text" width={250} height={52} />
        </StyledCard>

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
      </Stack>
    </DashboardLayout>
  );
}

export default DashboardLayoutSkeleton;
