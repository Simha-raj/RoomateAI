import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Members from "../pages/Members";
import Tasks from "../pages/Tasks";
import Schedule from "../pages/Schedule";
import Constraints from "../pages/Constraints";
import History from "../pages/History";
import Settings from "../pages/Settings";

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/members" element={<Members />} />

            <Route path="/tasks" element={<Tasks />} />

            <Route path="/schedule" element={<Schedule />} />

            <Route path="/constraints" element={<Constraints />} />

            <Route path="/history" element={<History />} />

            <Route path="/settings" element={<Settings />} />

        </Routes>

    );

}

export default AppRoutes;