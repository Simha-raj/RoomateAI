import { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Constraints.css";
import constraintsData from "../data/constraintsData";

import {
  Plus,
  Pencil,
  Trash2,
  Sparkles,
  Wand2
} from "lucide-react";

const Constraints = () => {

  const [constraint, setConstraint] = useState("");
  const [constraints, setConstraints] = useState(constraintsData);
  const [editId, setEditId] = useState(null);

  const addConstraint = () => {

    if (!constraint.trim()) return;

    if (editId) {

      setConstraints(
        constraints.map((item) =>
          item.id === editId
            ? { ...item, text: constraint }
            : item
        )
      );

      setEditId(null);

    } else {

      setConstraints([
        ...constraints,
        {
          id: Date.now(),
          text: constraint
        }
      ]);

    }

    setConstraint("");

  };

  const editConstraint = (item) => {
    setConstraint(item.text);
    setEditId(item.id);
  };

  const deleteConstraint = (id) => {
    setConstraints(
      constraints.filter((item) => item.id !== id)
    );
  };

  const clearAll = () => {
    setConstraints([]);
  };

  return (
    <Layout>

      <div className="constraints-page">

        {/* Header */}

        <div className="constraints-header">

          <div>

            <h1>Constraints</h1>

            <p>
              Add restrictions or preferences for AI scheduling.
            </p>

          </div>

          <button className="generate-btn">

            <Wand2 size={18} />

            Generate Schedule

          </button>

        </div>

        {/* Add Card */}

        <div className="constraint-card">

          <div className="card-title">

            <Sparkles size={20} />

            <h3>Add New Constraint</h3>

          </div>

          <textarea

            placeholder="Example:
Raju doesn't know cooking.
Arun has night shift.
Neha prefers morning tasks."

            value={constraint}

            onChange={(e) =>
              setConstraint(e.target.value)
            }

            maxLength={200}

          />

          <div className="card-footer">

            <span>

              {constraint.length}/200

            </span>

            <button
              className="add-btn"
              onClick={addConstraint}
            >

              <Plus size={18} />

              {editId ? "Update Constraint" : "Add Constraint"}

            </button>

          </div>

        </div>

        {/* List */}

        <div className="list-card">

          <div className="list-header">

            <h2>

              Your Constraints ({constraints.length})

            </h2>

            {constraints.length > 0 && (

              <button
                className="clear-btn"
                onClick={clearAll}
              >

                Clear All

              </button>

            )}

          </div>

          {constraints.length === 0 ? (

            <div className="empty-state">

              No Constraints Added

            </div>

          ) : (

            constraints.map((item) => (

              <div
                className="constraint-item"
                key={item.id}
              >

                <div className="constraint-text">

                  💬 {item.text}

                </div>

                <div className="actions">

                  <button
                    className="icon-btn"
                    onClick={() => editConstraint(item)}
                  >

                    <Pencil size={18} />

                  </button>

                  <button
                    className="icon-btn delete"
                    onClick={() =>
                      deleteConstraint(item.id)
                    }
                  >

                    <Trash2 size={18} />

                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </Layout>
  );
};

export default Constraints;