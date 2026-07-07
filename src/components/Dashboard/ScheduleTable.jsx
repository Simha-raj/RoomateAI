import { weeklySchedule } from "../../data/scheduleData";
import AvatarChip from "./AvatarChip";
import "./Dashboard.css";

const ScheduleTable = () => {
  return (
    <div className="dashboard-card">

      <div className="card-header">

        <h3>Weekly Schedule</h3>

        <button className="view-btn">
          View All
        </button>

      </div>

      <table className="schedule-table">

        <thead>

          <tr>

            <th>Day</th>

            <th>Breakfast</th>

            <th>Lunch</th>

            <th>Dinner</th>

            <th>Cleaning</th>

            <th>Garbage</th>

          </tr>

        </thead>

        <tbody>

          {weeklySchedule.map((item) => (

            <tr key={item.day}>

              <td>{item.day}</td>

              <td>
                <AvatarChip name={item.breakfast}/>
              </td>

              <td>
                <AvatarChip name={item.lunch}/>
              </td>

              <td>
                <AvatarChip name={item.dinner}/>
              </td>

              <td>
                <AvatarChip name={item.cleaning}/>
              </td>

              <td>
                <AvatarChip name={item.garbage}/>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ScheduleTable;