import {
  FaHome,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaHistory,
  FaCog,
  FaSlidersH,
  FaPlusCircle,
} from "react-icons/fa";

import MenuItem from "./MenuItem";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
   <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
    >
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">🏠</div>
        <div>
          <h2>RoomMate AI</h2>
          <small>Smart Scheduler</small>
        </div>
      </div>

      {/* Navigation */}
      <nav className="menu">
        <MenuItem to="/" icon={<FaHome />} label="Dashboard" />
        <MenuItem to="/members" icon={<FaUsers />} label="Members" />
        <MenuItem to="/tasks" icon={<FaTasks />} label="Tasks" />
        <MenuItem to="/schedule" icon={<FaCalendarAlt />} label="Schedule" />
        <MenuItem
          to="/constraints"
          icon={<FaSlidersH />}
          label="Constraints"
        />
        <MenuItem to="/history" icon={<FaHistory />} label="History" />
        <MenuItem to="/settings" icon={<FaCog />} label="Settings" />
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <div className="room-card">
          <h4>Current Room</h4>
          <p>Flat 302</p>
        </div>

        <button className="invite-btn">
          <FaPlusCircle />
          Invite Roommates
        </button>

        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />
          <div>
            <h4>Raj</h4>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;