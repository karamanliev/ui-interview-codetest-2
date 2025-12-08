import Sidebar from "@/components/Sidebar";
import { Skeleton, Stack } from "@mui/material";
import { DashboardLayoutContainer, MainContainer } from "./layoutStyles";

function DashboardLayoutSkeleton() {
  return (
    <DashboardLayoutContainer>
      <Sidebar />

      <MainContainer>
        <Stack spacing={4}>
          <Skeleton variant="text" width="40%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={100} />
        </Stack>
      </MainContainer>
    </DashboardLayoutContainer>
  );
}

export default DashboardLayoutSkeleton;

