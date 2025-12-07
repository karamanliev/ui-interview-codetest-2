import { Outlet } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { Box, styled } from "@mui/material";
import bgImage from "@/assets/bg.webp";

const DashboardLayoutContainer = styled(Box)`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: url(${bgImage});
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
`;

const MainContainer = styled("main")`
  padding: ${({ theme }) => theme.spacing(16)};
  min-height: 100vh;
  flex-grow: 1;
`;

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
