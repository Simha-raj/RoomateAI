import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaUsers
} from "react-icons/fa";

export const stats = [
  {
    id: 1,
    title: "Tasks This Week",
    value: 12,
    change: "+12%",
    color: "#5B3DF5",
    icon: FaTasks,
  },
  {
    id: 2,
    title: "Completed",
    value: 9,
    change: "+18%",
    color: "#16A34A",
    icon: FaCheckCircle,
  },
  {
    id: 3,
    title: "Pending",
    value: 3,
    change: "-4%",
    color: "#F59E0B",
    icon: FaClock,
  },
  {
    id: 4,
    title: "Roommates",
    value: 8,
    change: "+2",
    color: "#2563EB",
    icon: FaUsers,
  },
];