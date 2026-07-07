const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <div>
        <h4>{task.title}</h4>

        <p>
          {task.assignedTo} • {task.time}
        </p>
      </div>

      <span
        className={
          task.status === "Completed"
            ? "status completed"
            : "status pending"
        }
      >
        {task.status}
      </span>
    </div>
  );
};

export default TaskItem;