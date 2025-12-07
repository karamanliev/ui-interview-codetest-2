import DashboardLayout from "@/components/layout/DashboardLayout";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Tasks = lazy(() => import("@/pages/Tasks"));
const Team = lazy(() => import("@/pages/Team"));

function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
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
