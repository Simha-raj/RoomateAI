import Layout from "../components/Layout/Layout";
import StatsCards from "../components/Dashboard/StatsCards";
import "../components/Dashboard/Dashboard.css";
import ScheduleTable from "../components/Dashboard/ScheduleTable";
import TodayTasks from "../components/Dashboard/TodayTasks";
import UpcomingReminders from "../components/Dashboard/UpcomingReminders";
import WorkloadChart from "../components/Dashboard/WorkloadChart";

const Dashboard = () => {
    return (
        <Layout>

            <StatsCards />

            <div className="dashboard-grid">

                <div className="left-panel">

                    <ScheduleTable />

                    <WorkloadChart />

                </div>

                <div className="right-panel">

                    <TodayTasks />



                    <UpcomingReminders />

                </div>

            </div>

        </Layout>
    );
};

export default Dashboard;