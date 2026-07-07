import { FaBell } from "react-icons/fa";

const ReminderItem = ({ reminder }) => {
  return (
    <div className="reminder-item">
      <div className="reminder-icon">
        <FaBell />
      </div>

      <div>
        <h4>{reminder.title}</h4>
        <p>{reminder.due}</p>
      </div>
    </div>
  );
};

export default ReminderItem;