import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import DashboardLayoutSkeleton from "./components/DashboardLayout/DashboardLayoutSkeleton";

const Home = lazy(() => import("@/pages/Home"));
const Tasks = lazy(() => import("@/pages/Tasks"));
const Team = lazy(() => import("@/pages/Team"));

function App() {
  return (
    <Suspense fallback={<DashboardLayoutSkeleton />}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/team/:teamId" element={<Team />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
