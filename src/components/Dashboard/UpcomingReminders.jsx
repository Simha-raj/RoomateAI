import { reminders } from "../../data/remindersData";
import ReminderItem from "./ReminderItem";

const UpcomingReminders = () => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Upcoming Reminders</h3>
      </div>

      {reminders.map((reminder) => (
        <ReminderItem
          key={reminder.id}
          reminder={reminder}
        />
      ))}
    </div>
  );
};

export default UpcomingReminders;