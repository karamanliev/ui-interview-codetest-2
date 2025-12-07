import { Outlet } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { Box, Stack } from "@mui/material";

function DashboardLayout() {
  return (
    <Stack direction="row">
      <Sidebar />

      <Box component="main">
        <Outlet />
      </Box>
    </Stack>
  );
}

export default DashboardLayout;
