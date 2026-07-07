import StatCard from "./StatCard";
import { stats } from "../../data/dashboardData";

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          value={item.value}
          change={item.change}
          color={item.color}
          Icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatsCards;