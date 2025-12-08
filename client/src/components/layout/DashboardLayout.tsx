import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";
import { DashboardLayoutContainer, MainContainer } from "./layoutStyles";

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
