import Layout from "../components/Layout/Layout";
import members from "../data/membersData";
import "../styles/Members.css";
import { useState } from "react";
import InviteMemberModal from "../components/InviteMemberModal/InviteMemberModal";

import {
    MoreVertical,
    UserPlus
} from "lucide-react";

const Members = () => {

    const [showModal, setShowModal] = useState(false);

    const [member, setMember] = useState({
        name: "",
        age: "",
        shift: "",
        company: "",
        joinDate: ""
    });

    const handleSave = () => {

        console.log(member);

        // Later push into members array

        setShowModal(false);

        setMember({
            name: "",
            age: "",
            shift: "",
            company: "",
            joinDate: ""
        });

    };
    return (
        <Layout>

            <div className="members-page">

                <div className="members-header">

                    <div>

                        <h1>Members</h1>

                        <p>Manage your roommates</p>

                    </div>

                    <button
                        className="invite-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Invite Member
                    </button>

                </div>

                <div className="members-table-card">

                    <table className="members-table">

                        <thead>

                            <tr>

                                <th>Name</th>

                                <th>Date Joined</th>

                                <th>Age</th>

                                <th>Shift</th>

                                <th>Company</th>

                                <th></th>

                            </tr>

                        </thead>

                        <tbody>

                            {members.map((member) => (

                                <tr key={member.id}>

                                    <td>

                                        <div className="member-info">

                                            <img
                                                src={member.avatar}
                                                alt=""
                                            />

                                            <span>{member.name}</span>

                                        </div>

                                    </td>

                                    <td>{member.joined}</td>

                                    <td>{member.age}</td>

                                    <td>

                                        <span
                                            className={`shift ${member.shift.toLowerCase()}`}
                                        >
                                            {member.shift}
                                        </span>

                                    </td>

                                    <td>{member.company}</td>

                                    <td>

                                        <button className="member-action-btn">

                                            <MoreVertical size={18} />

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                    <div className="members-footer">

                        <span>

                            Showing 1 to 6 of 6 members

                        </span>

                        <div className="pagination">

                            <button>{"<"}</button>

                            <button className="active">1</button>

                            <button>{">"}</button>

                        </div>

                    </div>

                </div>

            </div>
            <InviteMemberModal
                show={showModal}
                onClose={() => setShowModal(false)}
                member={member}
                setMember={setMember}
                onSave={handleSave}
            />

        </Layout>
    );
};

export default Members;