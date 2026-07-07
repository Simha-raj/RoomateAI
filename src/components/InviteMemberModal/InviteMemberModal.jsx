import { X, User, CalendarDays, Building2, Moon } from "lucide-react";
import "./InviteMemberModal.css";

const InviteMemberModal = ({
  show,
  onClose,
  member,
  setMember,
  onSave,
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="invite-modal">

        <div className="modal-header">

          <div>
            <h2>Invite Member</h2>
            <p>Add a new member to your home</p>
          </div>

          <button className="close-btn" onClick={onClose}>
            <X size={22} />
          </button>

        </div>

        <div className="form-group">

          <label>Name</label>

          <div className="input-box">

            <User size={18} />

            <input
              type="text"
              placeholder="Enter full name"
              value={member.name}
              onChange={(e) =>
                setMember({ ...member, name: e.target.value })
              }
            />

          </div>

        </div>

        <div className="form-group">

          <label>Age</label>

          <div className="input-box">

            <CalendarDays size={18} />

            <input
              type="number"
              placeholder="Enter age"
              value={member.age}
              onChange={(e) =>
                setMember({ ...member, age: e.target.value })
              }
            />

          </div>

        </div>

        <div className="form-group">

          <label>Shift</label>

          <div className="input-box">

            <Moon size={18} />

            <select
              value={member.shift}
              onChange={(e) =>
                setMember({ ...member, shift: e.target.value })
              }
            >
              <option value="">Select Shift</option>
              <option>Morning</option>
              <option>Day</option>
              <option>Evening</option>
              <option>Night</option>
            </select>

          </div>

        </div>

        <div className="form-group">

          <label>Company</label>

          <div className="input-box">

            <Building2 size={18} />

            <input
              type="text"
              placeholder="Enter company name"
              value={member.company}
              onChange={(e) =>
                setMember({ ...member, company: e.target.value })
              }
            />

          </div>

        </div>

        <div className="form-group">

          <label>Date of Joining</label>

          <div className="input-box">

            <CalendarDays size={18} />

            <input
              type="date"
              value={member.joinDate}
              onChange={(e) =>
                setMember({ ...member, joinDate: e.target.value })
              }
            />

          </div>

        </div>

        <div className="modal-footer">

          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="invite-btn" onClick={onSave}>
            Invite Member
          </button>

        </div>

      </div>

    </div>
  );
};

export default InviteMemberModal;