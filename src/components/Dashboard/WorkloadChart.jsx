import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

import { workloadData } from "../../data/workloadData";
import "./Dashboard.css";

const colors = [
  "#5B3DF5",
  "#7C5CFF",
  "#3B82F6",
  "#10B981",
  "#F59E0B",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <h4>{payload[0].payload.name}</h4>

        <p>{payload[0].value} Tasks</p>
      </div>
    );
  }

  return null;
};

const WorkloadChart = () => {
  return (
    <div className="dashboard-card">

      <div className="card-header">

        <div>
          <h3>Workload Distribution</h3>

          <p className="chart-subtitle">
            Tasks assigned this week
          </p>

        </div>

      </div>
<div className="chart-container">
      <ResponsiveContainer width="100%" height={210}>

        <BarChart
          data={workloadData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
          />

          <YAxis
            allowDecimals={false}
          />

          <Tooltip
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="tasks"
            radius={[10,10,0,0]}
          >

            {workloadData.map((entry,index)=>(
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}

          </Bar>

        </BarChart>

      </ResponsiveContainer>
      </div>

      <div className="chart-summary">

        <div>

          <span className="summary-label">
            Total Tasks
          </span>

          <h3>
            {workloadData.reduce((a,b)=>a+b.tasks,0)}
          </h3>

        </div>

        <div>

          <span className="summary-label">
            Members
          </span>

          <h3>
            {workloadData.length}
          </h3>

        </div>

        <div>

          <span className="summary-label">
            Average
          </span>

          <h3>
            {(
              workloadData.reduce((a,b)=>a+b.tasks,0) /
              workloadData.length
            ).toFixed(1)}
          </h3>

        </div>

      </div>

    </div>
  );
};

export default WorkloadChart;