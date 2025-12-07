import DashboardLayout from "@/components/layout/DashboardLayout";
import { Home, Tasks, Team } from "@/pages";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team/:teamId" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
