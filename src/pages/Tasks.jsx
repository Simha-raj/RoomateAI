import { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Tasks.css";
import tasksData from "../data/taskData";

import {
  Search,
  Plus,
  Trash2
} from "lucide-react";

const Tasks = () => {

  const [tasks, setTasks] = useState(tasksData);
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Layout>

      <div className="tasks-page">

        {/* Header */}

        <div className="tasks-header">

          <div>

            <h1>Tasks</h1>

            <p>View and manage all the tasks.</p>

          </div>

          <div className="task-buttons">

            <button className="outline-btn">
              <Plus size={18} />
              Add Task
            </button>

          </div>

        </div>

        {/* Search */}

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Table */}

        <div className="table-card">

          <table>

            <thead>

              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredTasks.map((task) => (

                <tr key={task.id}>

                  <td>{task.name}</td>

                  <td>{task.description}</td>

                  <td>

                    <button
                      className="remove-btn"
                      onClick={() => removeTask(task.id)}
                    >
                      <Trash2 size={17} />
                      Remove
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>
  );
};

export default Tasks;