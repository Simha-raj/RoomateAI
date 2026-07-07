import "./Dashboard.css";

const StatCard = ({ title, value, change, color, Icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div
          className="stat-icon"
          style={{ background: color }}
        >
          <Icon />
        </div>

        <span
          className="change"
          style={{ color }}
        >
          {change}
        </span>
      </div>

      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
};

export default StatCard;