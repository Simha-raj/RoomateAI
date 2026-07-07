import { todayTasks } from "../../data/tasksData";
import TaskItem from "./TaskItem";

const TodayTasks = () => {
  const completed = todayTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const progress = Math.round(
    (completed / todayTasks.length) * 100
  );

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Today's Tasks</h3>

        <span className="progress-text">
          {progress}% Complete
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="task-list">
        {todayTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodayTasks;