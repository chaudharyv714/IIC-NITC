import React from 'react';
import ReactDOM from 'react-dom';
import Peoplecard from './Peoplecard';

function People() {
    return (
        <>
            <h1>Students Members</h1>
            <Peoplecard type="staff" />
            <h1>Students Members</h1>
            <Peoplecard type="student" />
        </>
    );
};

export default People;
