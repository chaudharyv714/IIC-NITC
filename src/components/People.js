import React from 'react';
import Peoplecard from './people/Peoplecard';
import './people.css';

function People() {
    return (
        <div id="people">
            <span>
            <i className="bg fa-solid fa-people-group"></i>
                <h3 id="team"> Our Team</h3>
            </span>
            <h2>Students Members</h2>
            <div id="student-members">
                <Peoplecard type="staff" />
            </div>
            <h2 className="mt-5">Students Members</h2>
            <div id="staff-members">
                <Peoplecard type="student" />
            </div>

        </div>
    );
};

export default People;
