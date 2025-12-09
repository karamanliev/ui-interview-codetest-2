import bgImage from "@/assets/bg.webp";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, styled } from "@mui/material";
import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";

export const DashboardLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}));

export const MainContainer = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(16),
}));

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardLayoutContainer>
      <Sidebar />

      <MainContainer>
        <Outlet />
        {children}
      </MainContainer>
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
