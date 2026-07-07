import "./Header.css";
import {
  FaBell,
  FaSearch,
 
  FaPlus
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">

      <div className="header-left">

        <button className="menu-btn" onClick={toggleSidebar}>
  <span style={{ color: "white", fontSize: "24px" }}>☰</span>
</button>

        <div>

          <h2>Dashboard</h2>

          <p>Welcome back, Raj 👋</p>

        </div>

      </div>

      <div className="header-center">

        <div className="search-box">

          <FaSearch className="search-icon"/>

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

      </div>

      <div className="header-right">

        <button className="notification-btn">

          <FaBell/>

          <span className="badge">
            3
          </span>

        </button>

        <button className="generate-btn">

          <FaPlus/>

          Generate Schedule

        </button>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/120?img=12"
            alt=""
          />

          <div>

            <h4>Raj Kumar</h4>

            <span>Administrator</span>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;