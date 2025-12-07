import { Outlet } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { Box, styled } from "@mui/material";
import bgImage from "@/assets/bg.webp";

const DashboardLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "top center",
  backgroundAttachment: "fixed",
}));

const MainContainer = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(16),
}));

function DashboardLayout() {
  return (
    <DashboardLayoutContainer>
      <Sidebar />

      <MainContainer>
        <Outlet />
      </MainContainer>
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
