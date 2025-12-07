import { Outlet } from "react-router";
import { Sidebar } from "@/components/Sidebar";

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
